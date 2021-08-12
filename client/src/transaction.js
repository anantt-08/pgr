import React, { useEffect } from 'react';
import { UIContainer, UIHeading, UILoader } from '../../components/UI';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import styles from './estyle';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/transaction';

const Transactions = () => {
  const classes = styles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getUserTransactionRequest());
  }, []);

  const { transaction, loading } = useSelector((state) => ({
    transaction: state.transaction.transaction,
    loading: state.transaction.loading,
  }));

  return (
    <>
      <UIContainer containerStyle={classes.container}>
        <UIHeading text={`Transactions`} textStyle={classes.heading} />
        {loading ? (
          <div
            style={{
              height: '80vh',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <UILoader style={{ color: '#336699' }} size={60} />
          </div>
        ) : transaction.length < 1 ? (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 60,
            }}
          >
            <img
              src="https://i.pinimg.com/originals/0e/ca/10/0eca10f07594819a0937a0e312a25846.png"
              alt="empty"
              style={{ height: 100, width: 100 }}
            />
            <p
              style={{
                textAlign: 'center',
                marginTop: 20,
                fontSize: 24,
              }}
            >
              No Transactions Yet
            </p>
          </div>
        ) : (
          transaction.map((item, index) => (
            <div className={classes.cardtitle} key={index}>
              <div className={classes.cardone}>
                <div className={classes.image}>
                  <img
                    src="/assets/images/course-1-4.jpg"
                    alt={index}
                    className={classes.insideimage}
                  />
                </div>
                <div className={classes.text}>
                  <div className={classes.coursename}>New react bootcamp</div>
                  <div className={classes.transactionid}>
                    Transaction-ID :{' '}
                    <span style={{ color: 'chocolate' }}>
                      {item.transaction_id}
                    </span>
                  </div>
                  <div className={classes.transactiondate}>
                    {new Date(item.createdAt).toDateString()}
                  </div>
                  <div className={classes.status}>
                    {item.status === 'Completed' ? (
                      <>
                        <CheckCircleIcon
                          style={{ color: 'green', marginRight: '5px' }}
                        />
                        Completed
                      </>
                    ) : (
                      <>
                        <ErrorIcon
                          style={{ color: 'red', marginRight: '5px' }}
                        />
                        Not Completed
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className={classes.down}>
                Total Price : ₹{item.course ? item.course.price : '1500'}
              </div>
            </div>
          ))
        )}
      </UIContainer>
    </>
  );
};

export default Transactions;
