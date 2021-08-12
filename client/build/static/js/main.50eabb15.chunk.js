(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    150: function (e, t, a) {},
    225: function (e, t, a) {},
    249: function (e, t, a) {},
    329: function (e, t, a) {},
    355: function (e, t, a) {},
    468: function (e, t, a) {},
    494: function (e, t, a) {},
    495: function (e, t, a) {},
    496: function (e, t, a) {},
    501: function (e, t, a) {},
    569: function (e, t, a) {
      "use strict";
      a.r(t);
      var c = a(0),
        r = a.n(c),
        n = a(21),
        s = a.n(n),
        i = (a(329), a(68), a(10)),
        o = a.p + "static/media/logo.61f21158.jpg",
        l = a(35),
        d = a(25),
        j = a(630),
        b = a(632),
        h = Object(j.a)(function (e) {
          return {
            purple: {
              color: e.palette.getContrastText(b.a[500]),
              backgroundColor: b.a[500],
            },
            paper: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: e.spacing(2),
            },
            avatar: { margin: e.spacing(1), backgroundColor: "red !important" },
            form: { width: "100%", marginTop: e.spacing(3) },
            submit: { margin: e.spacing(3, 0, 2) },
            forget: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
            },
            yo: {
              color: "blue",
              backgroundColor: "transparent",
              textDecoration: "none",
              "&:hover": { color: "red", textDecoration: "underline" },
            },
          };
        }),
        g = a(16),
        p = a(668),
        m = a(633),
        x = a(59),
        u = a(1),
        O = function () {
          var e = h(),
            t = Object(c.useState)(JSON.parse(localStorage.getItem("profile"))),
            a = Object(i.a)(t, 2),
            r = a[0],
            n = a[1],
            s = Object(x.c)(),
            j = Object(l.g)(),
            b = Object(l.h)();
          Object(c.useEffect)(
            function () {
              null === r || void 0 === r || r.token;
              n(JSON.parse(localStorage.getItem("profile")));
            },
            [b]
          );
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(g.NotificationContainer, {}),
              Object(u.jsxs)("div", {
                className: "headd",
                children: [
                  Object(u.jsx)("center", {}),
                  Object(u.jsx)("div", {
                    className: "hdlogo",
                    children: Object(u.jsx)("center", {
                      children: Object(u.jsx)("img", {
                        src: o,
                        width: "60",
                        height: "60",
                      }),
                    }),
                  }),
                  Object(u.jsx)("div", {
                    className: "heading",
                    children: Object(u.jsx)("center", {
                      children: Object(u.jsx)("h1", {
                        className: "heading",
                        children: "Praedico global research",
                      }),
                    }),
                  }),
                  r
                    ? Object(u.jsxs)("div", {
                        children: [
                          Object(u.jsx)("div", {
                            className: "loginbtn",
                            children: Object(u.jsx)("center", {
                              children: Object(u.jsx)(p.a, {
                                src: "",
                                className: e.purple,
                              }),
                            }),
                          }),
                          Object(u.jsx)("div", {
                            className: "signupbtn",
                            children: Object(u.jsx)("center", {
                              children: Object(u.jsx)(m.a, {
                                variant: "contained",
                                className: e.logout,
                                color: "secondary",
                                onClick: function () {
                                  g.NotificationManager.success("Logged Out"),
                                    setTimeout(function () {
                                      s({ type: "LOGOUT" }),
                                        j.push("/"),
                                        n(null);
                                    }, 1e3);
                                },
                                children: "Logout",
                              }),
                            }),
                          }),
                        ],
                      })
                    : Object(u.jsx)(u.Fragment, {
                        children: Object(u.jsx)("div", {
                          className: "signupbtn",
                          children: Object(u.jsx)(m.a, {
                            component: d.b,
                            to: "/login",
                            variant: "contained",
                            color: "primary",
                            children: "Login",
                          }),
                        }),
                      }),
                ],
              }),
            ],
          });
        },
        f = function () {
          var e = JSON.parse(localStorage.getItem("profile")),
            t = e && e.result.admin;
          return Object(u.jsxs)("div", {
            style: { display: "flex", width: "100%" },
            children: [
              Object(u.jsx)(d.c, {
                className: "nav",
                exact: !0,
                activeClassName: "ac",
                to: "/",
                style: t ? { width: "19%" } : { width: "25%" },
                children: "Home",
              }),
              Object(u.jsx)(d.c, {
                className: "nav",
                exact: !0,
                activeClassName: "ac",
                to: "/about",
                style: t ? { width: "19%" } : { width: "25%" },
                children: "About",
              }),
              Object(u.jsx)(d.c, {
                className: "nav",
                exact: !0,
                activeClassName: "ac",
                to: "/stock",
                style: t ? { width: "19%" } : { width: "25%" },
                children: "Stock",
              }),
              Object(u.jsx)(d.c, {
                className: "nav",
                exact: !0,
                activeClassName: "ac",
                to: "/contact",
                style: t ? { width: "19%" } : { width: "25%" },
                children: "Contact",
              }),
              t
                ? Object(u.jsx)(d.c, {
                    className: "nav",
                    exact: !0,
                    activeClassName: "ac",
                    to: "/admin",
                    style: t ? { width: "24%" } : { width: "0%" },
                    children: "Dashboard",
                  })
                : Object(u.jsx)(u.Fragment, {}),
            ],
          });
        },
        v = a(29),
        y = a(14),
        w = a(15),
        k = a.n(w),
        N = a(26),
        S = a(9),
        A = a(643),
        C = a(645),
        I = a(640),
        P = a(642),
        R = a(649),
        T = a(644),
        L = a(639),
        F = a(641),
        D = a(210),
        B = a(634),
        H = a(666),
        E = a(637),
        J = a(638),
        M = a(164),
        W = a.n(M),
        G = a(274),
        z = a.n(G),
        X = function (e) {
          var t = e.name,
            a = e.handleChange,
            c = e.label,
            r = e.half,
            n = e.autoFocus,
            s = e.type,
            i = e.handleShowPassword;
          return Object(u.jsx)(u.Fragment, {
            children: Object(u.jsx)(B.a, {
              item: !0,
              xs: 12,
              sm: r ? 6 : 12,
              children: Object(u.jsx)(H.a, {
                name: t,
                onChange: a,
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                label: c,
                autoFocus: n,
                type: s,
                InputProps:
                  "password" == t
                    ? {
                        endAdornment: Object(u.jsx)(E.a, {
                          position: "end",
                          children: Object(u.jsx)(J.a, {
                            onClick: i,
                            children:
                              "password" == s
                                ? Object(u.jsx)(W.a, {})
                                : Object(u.jsx)(z.a, {}),
                          }),
                        }),
                      }
                    : null,
              }),
            }),
          });
        },
        U = a(31),
        V = a.n(U),
        q = a(667),
        Z = (a(225), a(355), a(647)),
        Q = a(650),
        K = a(648),
        Y = V.a.create({ baseURL: "http://pgrdemo.herokuapp.com" });
      Y.interceptors.request.use(function (e) {
        return (
          localStorage.getItem("profile") &&
            (e.headers.Authorization = "Bearer ".concat(
              JSON.parse(localStorage.getItem("profile")).token
            )),
          e
        );
      });
      var _ = a(67),
        $ = function (e) {
          var t = e.date,
            a = e.category;
          console.log("CHART WALI DATE", e.date),
            console.log("CHART WALI Category", a);
          var c = r.a.useState([]),
            n = Object(i.a)(c, 2),
            s = (n[0], n[1], e.data);
          console.log("CHART WALA DATA", s);
          var o = e.adx,
            l = e.plusDi,
            d = e.minusDi;
          console.log("ADX wala data", o),
            console.log("Plus DI wala", l),
            console.log("Minus wala", d);
          var j = e.rsi;
          console.log("RSI wala", j);
          var b = e.macd,
            h = e.macdexp9,
            g = e.macdhi;
          console.log("MACD data", b),
            console.log("MACDEXP9 wala", h),
            console.log("Histogram wala", g);
          var p = e.mfi,
            m = e.cci;
          console.log("MFI DATA", p), console.log("CCI data", m);
          var x = e.wr,
            O = e.ub,
            f = e.mb,
            v = e.lb,
            y = e.sk,
            w = e.sd;
          return "psar" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "PSAR value (LAST 50 days)",
                        data: s,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "adx" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "ADX value (LAST 50 days)",
                        data: o,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: "Plus DI value (LAST 50 days)",
                        data: l,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: "Minus Di value (LAST 50 days)",
                        data: d,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "rsi" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "RSI value (LAST 50 days)",
                        data: j,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "macd" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "MACD value (LAST 50 days)",
                        data: b,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: "EXP(9) value (LAST 50 days)",
                        data: h,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        type: "bar",
                        label: "MACD histogram value (LAST 50 days)",
                        data: g,
                        backgroundColor: ["#273c75"],
                        borderColor: ["#192a56"],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "mfi" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "MFI value (LAST 50 days)",
                        data: p,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "cci" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "CCI value (LAST 50 days)",
                        data: m,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "wr" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "WR value (LAST 50 days)",
                        data: x,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "bb" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "Upper Bond value  (LAST 50 days)",
                        data: O,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: "Middle Bond value  (LAST 50 days)",
                        data: f,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: "Lower Bond value  (LAST 50 days)",
                        data: v,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "stoch" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "Slow K value (LAST 50 days)",
                        data: y,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                      {
                        label: "Slow D value (LAST 50 days)",
                        data: w,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              })
            : "ichimoku" == a
            ? Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)("h3", {
                  children: "No Chart to display",
                }),
              })
            : Object(u.jsx)(u.Fragment, {
                children: Object(u.jsx)(_.a, {
                  data: {
                    labels: t,
                    datasets: [
                      {
                        label: "PSAR value (LAST 50 days)",
                        data: s,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(54, 162, 235, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(75, 192, 192, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                          "rgba(255, 159, 64, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(75, 192, 192, 1)",
                          "rgba(153, 102, 255, 1)",
                          "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  },
                  height: 400,
                  width: 600,
                  options: { maintainAspectRatio: !1 },
                }),
              });
        },
        ee = a(572),
        te = a(662),
        ae = a(671),
        ce = a(174),
        re = a.n(ce);
      function ne(e) {
        var t = e.data;
        return (
          console.log("Data", t),
          Object(u.jsx)(re.a, {
            variant: "popover",
            popupId: "demo-popup-popover",
            children: function (e) {
              return Object(u.jsxs)("div", {
                children: [
                  Object(u.jsx)(
                    m.a,
                    Object(y.a)(
                      Object(y.a)(
                        { variant: "contained", color: "primary" },
                        Object(ce.bindTrigger)(e)
                      ),
                      {},
                      {
                        children: Object(u.jsx)("i", {
                          className: "fa fa-eye fa-large",
                          style: { minHeight: "20px", padding: "auto" },
                          children: " Historical Predictions",
                        }),
                      }
                    )
                  ),
                  Object(u.jsxs)(
                    ae.a,
                    Object(y.a)(
                      Object(y.a)({}, Object(ce.bindPopover)(e)),
                      {},
                      {
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "center",
                        },
                        transformOrigin: {
                          vertical: "bottom",
                          horizontal: "center",
                        },
                        style: { backgroundColor: "rgba(0,0,0,0.5)" },
                        children: [
                          Object(u.jsx)("center", {
                            style: { color: "#000" },
                            children: "Historical data of 21 days",
                          }),
                          Object(u.jsxs)(te.a, {
                            p: 1,
                            style: {
                              width: "500px",
                              color: "#fff",
                              height: "90vh",
                            },
                            children: [
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[0].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[0].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[0].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[1].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[1].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[1].condit],
                                    }),
                                    " ",
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[2].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[2].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[2].condit],
                                    }),
                                    " ",
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[3].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[3].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[3].condit],
                                    }),
                                    " ",
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[4].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[4].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[4].condit],
                                    }),
                                    " ",
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[5].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[5].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[5].condit],
                                    }),
                                    " ",
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[6].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[6].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[6].condit],
                                    }),
                                    "  ",
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[7].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[7].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[7].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[8].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[8].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[8].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[9].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[9].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[9].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[10].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[10].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[10].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[11].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[11].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[11].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[12].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[12].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[12].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[13].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[13].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[13].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[14].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[14].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[14].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[15].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[15].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[15].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[16].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[16].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[16].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[17].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[17].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[17].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[18].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[18].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[18].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[19].color),
                                  paddingTop: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                  margin: "1px",
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[19].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[19].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)(ee.a, {
                                style: {
                                  backgroundColor: "".concat(t[20].color),
                                  paddingBottom: 10,
                                  paddingTop: 10,
                                  paddingLeft: 20,
                                  paddingRight: 20,
                                },
                                children: Object(u.jsxs)("b", {
                                  children: [
                                    t[20].date,
                                    Object(u.jsxs)("span", {
                                      style: { marginLeft: "100px" },
                                      children: [" ", t[20].condit],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }
                    )
                  ),
                ],
              });
            },
          })
        );
      }
      a(468);
      var se = function () {
          var e = Object(l.g)(),
            t = Object(c.useState)("100 1"),
            a = Object(i.a)(t, 2),
            r = a[0],
            n = a[1],
            s = Object(c.useState)("100"),
            o = Object(i.a)(s, 2),
            d = o[0],
            j = o[1],
            b = Object(c.useState)("1"),
            h = Object(i.a)(b, 2),
            p = h[0],
            x = h[1],
            O = Object(c.useState)(JSON.parse(localStorage.getItem("profile"))),
            f = Object(i.a)(O, 2),
            v = f[0],
            y = f[1],
            w = Object(c.useState)(!1),
            S = Object(i.a)(w, 2),
            A = S[0],
            C = S[1];
          function I(e) {
            return new Promise(function (t) {
              var a = document.createElement("script");
              (a.src = e),
                (a.onload = function () {
                  t(!0);
                }),
                (a.onerror = function () {
                  t(!1);
                }),
                document.body.appendChild(a);
            });
          }
          function P() {
            return (P = Object(N.a)(
              k.a.mark(function t() {
                var a, c, r, n, s, i;
                return k.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            I("https://checkout.razorpay.com/v1/checkout.js")
                          );
                        case 3:
                          if (t.sent) {
                            t.next = 7;
                            break;
                          }
                          return (
                            alert(
                              "Razorpay SDK failed to load. Are you online?"
                            ),
                            t.abrupt("return")
                          );
                        case 7:
                          return (
                            C(!0),
                            (t.next = 10),
                            V.a.post(
                              "http://pgrdemo.herokuapp.com/users/createOrder",
                              { amount: d }
                            )
                          );
                        case 10:
                          if ((a = t.sent).data) {
                            t.next = 15;
                            break;
                          }
                          return (
                            g.NotificationManager.error("Something went Wrong"),
                            C(!1),
                            t.abrupt("return")
                          );
                        case 15:
                          (c = a.data),
                            (r = c.amount),
                            (n = c.id),
                            (s = c.currency),
                            (i = {
                              key: "rzp_test_hv6LKzFbQ6yQcc",
                              amount: r,
                              currency: s,
                              name: "PGR Demo.",
                              description: "Buy ".concat(v.result.name),
                              modal: {
                                ondismiss: function () {
                                  C(!1);
                                },
                              },
                              handler: (function () {
                                var t = Object(N.a)(
                                  k.a.mark(function t(a) {
                                    var c, s;
                                    return k.a.wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (c = {
                                                orderCreationId: n,
                                                razorpayPaymentId:
                                                  a.razorpay_payment_id,
                                                razorpayOrderId:
                                                  a.razorpay_order_id,
                                                razorpaySignature:
                                                  a.razorpay_signature,
                                                userId: v.result._id,
                                                amount: r,
                                                dur: p,
                                              }),
                                              (t.next = 3),
                                              V.a.post(
                                                "http://pgrdemo.herokuapp.com/users/buy",
                                                c
                                              )
                                            );
                                          case 3:
                                            201 == (s = t.sent).status
                                              ? (g.NotificationManager.success(
                                                  "Purchase successFull!"
                                                ),
                                                (s.data.token = v.token),
                                                y(s.data),
                                                localStorage.setItem(
                                                  "profile",
                                                  JSON.stringify(s.data)
                                                ),
                                                e.replace("/"))
                                              : g.NotificationManager.error(
                                                  "Couldnt buy user"
                                                ),
                                              C(!1);
                                          case 6:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                  })
                                );
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              })(),
                              prefill: {
                                name: "PGR Demo",
                                email: "pgrdemo@example.com",
                                contact: "9999999999",
                              },
                              notes: { address: "Praedico Global Research" },
                              theme: { color: "#61dafb" },
                            }),
                            new window.Razorpay(i).open(),
                            (t.next = 26);
                          break;
                        case 21:
                          (t.prev = 21),
                            (t.t0 = t.catch(0)),
                            console.log(t.t0, "sad"),
                            g.NotificationManager.error(
                              "Something Went Wrong Try Again!!"
                            ),
                            C(!1);
                        case 26:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 21]]
                );
              })
            )).apply(this, arguments);
          }
          return (
            console.log(v),
            Object(u.jsx)(u.Fragment, {
              children: Object(u.jsxs)("div", {
                className: "card plans",
                style: { width: "24rem", boxShadow: "0 2px 10px 4px gray" },
                children: [
                  Object(u.jsx)("div", { className: "card-img-top img" }),
                  Object(u.jsxs)("div", {
                    className: "card-body",
                    children: [
                      Object(u.jsx)("h5", {
                        className: "card-title plans-title",
                        children: "Buy Our Plans",
                      }),
                      Object(u.jsxs)("p", {
                        className: "card-text plans-text",
                        children: [
                          Object(u.jsx)("p", {
                            children: "1 Month Plan - $100",
                          }),
                          Object(u.jsx)("p", {
                            children: "3 Months Plan - $300",
                          }),
                          Object(u.jsx)("p", {
                            children: "6 Months Plan - $600",
                          }),
                          Object(u.jsx)("p", {
                            children: "12 Months Plan - $1000",
                          }),
                        ],
                      }),
                      Object(u.jsx)("label", { children: "Select Your Plan" }),
                      Object(u.jsxs)("div", {
                        children: [
                          Object(u.jsxs)("select", {
                            className: "select-plan",
                            value: r,
                            onChange: function (e) {
                              return (function (e) {
                                var t = e.split(" ");
                                n(e), j(t[0]), x(t[1]);
                              })(e.target.value);
                            },
                            children: [
                              Object(u.jsx)("option", {
                                value: "100 1",
                                children: "1 Month Plan - $100",
                              }),
                              Object(u.jsx)("option", {
                                value: "300 3",
                                children: "3 Months Plan - $300",
                              }),
                              Object(u.jsx)("option", {
                                value: "600 6",
                                children: "6 Months Plan - $600",
                              }),
                              Object(u.jsx)("option", {
                                value: "1000 12",
                                children: "12 Months Plan - $1000",
                              }),
                            ],
                          }),
                          Object(u.jsx)(m.a, {
                            disabled:
                              null === v || void 0 === v
                                ? void 0
                                : v.result.payment,
                            variant: "contained",
                            color: "primary",
                            onClick: function () {
                              v
                                ? (function () {
                                    P.apply(this, arguments);
                                  })()
                                : e.replace("/login");
                            },
                            style: { cursor: "pointer" },
                            children: A
                              ? Object(u.jsx)(L.a, { size: 30, color: "#fff" })
                              : (
                                  null === v || void 0 === v
                                    ? void 0
                                    : v.result.payment
                                )
                              ? "Bought"
                              : "Buy Plan",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        ie = {
          firstName: "",
          lastName: "",
          email: "",
          mobileno: "",
          password: "",
          confirmPassword: "",
        },
        oe = Object(S.a)(function (e) {
          return {
            head: {
              backgroundColor: e.palette.common.black,
              color: e.palette.common.white,
            },
            body: { fontSize: 18, color: "black", fontFamily: "vardana" },
          };
        })(I.a),
        le = Object(S.a)(function (e) {
          return {
            root: {
              "&:nth-of-type(odd)": { backgroundColor: e.palette.action.hover },
            },
          };
        })(F.a),
        de = Object(j.a)(function (e) {
          return {
            table: { minWidth: 700 },
            root: { width: "100%" },
            container: { maxHeight: 440 },
            typography: { padding: e.spacing(2) },
            paper: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: e.spacing(2),
            },
            avatar: { margin: e.spacing(1), backgroundColor: "red !important" },
            form: { width: "100%", marginTop: e.spacing(3) },
          };
        });
      function je(e) {
        var t = e.history,
          a = (e.whole, e.setwhole),
          n = e.name,
          s = Object(c.useState)({}),
          o = Object(i.a)(s, 2),
          d = o[0],
          j = o[1],
          b = de(),
          h = Object(c.useState)([]),
          p = Object(i.a)(h, 2),
          O = p[0],
          f = p[1],
          v = Object(c.useState)([]),
          y = Object(i.a)(v, 2),
          w = y[0],
          k = y[1],
          N = Object(l.i)().id,
          S = Object(c.useState)(!1),
          I = Object(i.a)(S, 2),
          B = I[0],
          H = I[1],
          E = r.a.useState(0),
          J = Object(i.a)(E, 2),
          M = J[0],
          G = J[1],
          z = r.a.useState(10),
          X = Object(i.a)(z, 2),
          U = X[0],
          Y = X[1],
          _ = r.a.useState(!1),
          ee = Object(i.a)(_, 2),
          te = ee[0],
          ae = ee[1],
          ce = Object(c.useState)(null),
          re = Object(i.a)(ce, 2),
          je = re[0],
          be = re[1],
          he = r.a.useState(!1),
          ge = Object(i.a)(he, 2),
          pe = ge[0],
          me = ge[1],
          xe = Object(c.useState)(""),
          ue = Object(i.a)(xe, 2),
          Oe = ue[0],
          fe = ue[1],
          ve = Object(c.useState)([]),
          ye = Object(i.a)(ve, 2),
          we = ye[0],
          ke = ye[1],
          Ne = Object(c.useState)([]),
          Se = Object(i.a)(Ne, 2),
          Ae = Se[0],
          Ce = Se[1],
          Ie = Object(c.useState)([]),
          Pe = Object(i.a)(Ie, 2),
          Re = Pe[0],
          Te = Pe[1],
          Le = Object(c.useState)([]),
          Fe = Object(i.a)(Le, 2),
          De = Fe[0],
          Be = Fe[1],
          He = Object(c.useState)([]),
          Ee = Object(i.a)(He, 2),
          Je = Ee[0],
          Me = Ee[1],
          We = Object(c.useState)([]),
          Ge = Object(i.a)(We, 2),
          ze = Ge[0],
          Xe = Ge[1],
          Ue = Object(c.useState)([]),
          Ve = Object(i.a)(Ue, 2),
          qe = Ve[0],
          Ze = Ve[1],
          Qe = Object(c.useState)([]),
          Ke = Object(i.a)(Qe, 2),
          Ye = Ke[0],
          _e = Ke[1],
          $e = Object(c.useState)([]),
          et = Object(i.a)($e, 2),
          tt = et[0],
          at = et[1],
          ct = Object(c.useState)([]),
          rt = Object(i.a)(ct, 2),
          nt = rt[0],
          st = rt[1],
          it = Object(c.useState)([]),
          ot = Object(i.a)(it, 2),
          lt = ot[0],
          dt = ot[1],
          jt = Object(c.useState)([]),
          bt = Object(i.a)(jt, 2),
          ht = bt[0],
          gt = bt[1],
          pt = Object(c.useState)([]),
          mt = Object(i.a)(pt, 2),
          xt = mt[0],
          ut = mt[1],
          Ot = Object(c.useState)([]),
          ft = Object(i.a)(Ot, 2),
          vt = ft[0],
          yt = ft[1],
          wt = Object(c.useState)([]),
          kt = Object(i.a)(wt, 2),
          Nt = kt[0],
          St = kt[1],
          At = Object(c.useState)([]),
          Ct = Object(i.a)(At, 2),
          It = Ct[0],
          Pt = Ct[1],
          Rt = Object(c.useState)([]),
          Tt = Object(i.a)(Rt, 2),
          Lt = Tt[0],
          Ft = Tt[1],
          Dt = Object(c.useState)([]),
          Bt = Object(i.a)(Dt, 2),
          Ht = Bt[0],
          Et = Bt[1],
          Jt = function () {
            ae(!1);
          },
          Mt = function () {
            me(!1);
          },
          Wt = Object(c.useState)(JSON.parse(localStorage.getItem("profile"))),
          Gt = Object(i.a)(Wt, 2),
          zt = Gt[0],
          Xt = (Gt[1], r.a.useState(null)),
          Ut = Object(i.a)(Xt, 2),
          Vt = (Ut[0], Ut[1], Object(c.useState)([])),
          qt = Object(i.a)(Vt, 2),
          Zt = qt[0],
          Qt = qt[1],
          Kt = function (e, t) {
            G(t);
          },
          Yt = function (e) {
            Y(+e.target.value), G(0);
          },
          _t = Object(c.useState)(!1),
          $t = Object(i.a)(_t, 2),
          ea = ($t[0], $t[1], Object(c.useState)(!1)),
          ta = Object(i.a)(ea, 2),
          aa = (ta[0], ta[1], Object(c.useState)(ie)),
          ca = Object(i.a)(aa, 2);
        ca[0], ca[1], Object(x.c)();
        Object(c.useEffect)(
          function () {
            if (null != je && null != N) {
              H(!0), f(je.data[N]);
              var e = [];
              Object.values(je.objdata).map(function (t, a) {
                return e.push(t);
              }),
                Qt(e);
              var t = [];
              Object.values(je.data[N][0]).map(function (e, a) {
                return t.push(e);
              }),
                k(t),
                H(!1),
                j(je.color[window.location.pathname.split("/").slice(-1)[0]]),
                fe(window.location.pathname.split("/").slice(-1)[0]);
            } else H(!0);
          },
          [t.location.pathname]
        ),
          Object(c.useEffect)(
            function () {
              var e = { "Access-Control-Allow-Origin": "*" };
              H(!0),
                V.a
                  .get("http://pgrdemo.herokuapp.com/users/first/".concat(n), {
                    headers: e,
                  })
                  .then(function (e) {
                    f(e.data.data[N]);
                    var t = [];
                    Object.values(e.data.objdata).map(function (e, a) {
                      return t.push(e);
                    }),
                      Qt(t);
                    var a = [];
                    Object.values(e.data.data[N][0]).map(function (e, t) {
                      return a.push(e);
                    }),
                      k(a),
                      H(!1),
                      j(
                        e.data.color[
                          window.location.pathname.split("/").slice(-1)[0]
                        ]
                      ),
                      ke(e.data.chart.psar.date),
                      Ce(e.data.chart.psar.psar),
                      Et(e.data.historical),
                      fe(window.location.pathname.split("/").slice(-1)[0]);
                  })
                  .catch(function (e) {
                    H(!1), console.log("error");
                  }),
                V.a
                  .get("http://pgrdemo.herokuapp.com/users/data/".concat(n), {
                    headers: e,
                  })
                  .then(function (e) {
                    f(e.data.data[N]), be(e.data), a("too");
                    var t = [];
                    Object.values(e.data.objdata).map(function (e, a) {
                      return t.push(e);
                    }),
                      Qt(t),
                      H(!1),
                      j(
                        e.data.color[
                          window.location.pathname.split("/").slice(-1)[0]
                        ]
                      ),
                      ke(e.data.chart.psar.date),
                      Ce(e.data.chart.psar.psar),
                      fe(window.location.pathname.split("/").slice(-1)[0]),
                      Te(e.data.chart.adx.Adx),
                      Be(e.data.chart.adx.plusDi),
                      Me(e.data.chart.adx.minusDi),
                      Xe(e.data.chart.rsi.rsi),
                      Ze(e.data.chart.macd.macd),
                      _e(e.data.chart.macd.macdexp9),
                      at(e.data.chart.macd.macdhi),
                      st(e.data.chart.mfi.mfi),
                      dt(e.data.chart.cci.cci),
                      gt(e.data.chart.wr.wr),
                      ut(e.data.chart.bb.ub),
                      yt(e.data.chart.bb.mb),
                      St(e.data.chart.bb.lb),
                      Pt(e.data.chart.stoch.sk),
                      Ft(e.data.chart.stoch.sd),
                      Et(e.data.historical);
                  })
                  .catch(function (e) {
                    H(!1), console.log("error");
                  });
            },
            [n]
          );
        for (var ra = [], na = 0, sa = 0, ia = 0, oa = 0; oa < Zt.length; oa++)
          "I" === Zt[oa] && na++,
            "D" === Zt[oa] && ia++,
            "N" === Zt[oa] && sa++;
        ra.push(na), ra.push(ia), ra.push(sa);
        var la = function (e) {
          return n
            ? "I" === e
              ? Object(u.jsx)("td", {
                  style: { backgroundColor: "#4cd137", color: "white" },
                  children: "Increment",
                })
              : "D" === e
              ? Object(u.jsx)("td", {
                  style: { backgroundColor: "#e84118", color: "white" },
                  children: "Decrement",
                })
              : Object(u.jsx)("td", {
                  style: { backgroundColor: "#00a8ff", color: "white" },
                  children: "Neutral",
                })
            : Object(u.jsx)("p", {});
        };
        var da =
          w.length > 0
            ? O.slice(1).map(function (e) {
                return (function (e) {
                  var t = {};
                  return (
                    Object.values(e).map(function (e, a) {
                      return (t[w[a]] = e);
                    }),
                    t
                  );
                })(e);
              })
            : [];
        return B
          ? Object(u.jsx)("div", {
              style: {
                height: "30vh",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              },
              children: Object(u.jsx)(L.a, {
                style: { width: "60px", height: "60px" },
              }),
            })
          : Object(u.jsxs)(u.Fragment, {
              children: [
                Object(u.jsx)(g.NotificationContainer, {}),
                zt
                  ? Object(u.jsx)("div", {
                      className: "prediction-table",
                      style: { paddingTop: "30px" },
                      children: Object(u.jsxs)("center", {
                        children: [
                          Object(u.jsxs)("div", {
                            children: [
                              Object(u.jsx)("h2", {
                                children: "Praedico Predictions",
                              }),
                              Object(u.jsxs)("table", {
                                children: [
                                  Object(u.jsxs)("tr", {
                                    children: [
                                      Object(u.jsx)("th", {
                                        children: "PSAR Trend",
                                      }),
                                      Object(u.jsx)("th", {
                                        children: "ADX Indicators",
                                      }),
                                      Object(u.jsx)("th", {
                                        children: "RSI Indicators",
                                      }),
                                      Object(u.jsx)("th", {
                                        children: "MACD Indicators",
                                      }),
                                      Object(u.jsx)("th", {
                                        children: "MFI Oscillators",
                                      }),
                                      Object(u.jsx)("th", {
                                        children: "CCI Oscillators",
                                      }),
                                      Object(u.jsx)("th", {
                                        children: "William %R Indicators",
                                      }),
                                    ],
                                  }),
                                  Object(u.jsx)("tr", {
                                    children:
                                      zt &&
                                      (null === zt || void 0 === zt
                                        ? void 0
                                        : zt.result.payment)
                                        ? Object(u.jsx)(u.Fragment, {
                                            children: Zt.map(function (e, t) {
                                              return Object(u.jsx)(u.Fragment, {
                                                children: la(e),
                                              });
                                            }),
                                          })
                                        : Object(u.jsxs)(u.Fragment, {
                                            children: [
                                              Object(u.jsx)("td", {
                                                children: la(Zt[0]),
                                              }),
                                              Object(u.jsx)("td", {
                                                children: Object(u.jsxs)(m.a, {
                                                  variant: "contained",
                                                  color: "primary",
                                                  onClick: function () {
                                                    ae(!0);
                                                  },
                                                  children: [
                                                    Object(u.jsx)(W.a, {}),
                                                    Object(u.jsx)("span", {
                                                      style: {
                                                        marginLeft: "3px",
                                                        fontWeight: "bolder",
                                                      },
                                                      children: "Show",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(u.jsx)("br", {}),
                          zt &&
                          (null === zt || void 0 === zt
                            ? void 0
                            : zt.result.payment)
                            ? Object(u.jsxs)(u.Fragment, {
                                children: [
                                  Object(u.jsx)("h3", {
                                    children: (function () {
                                      var e = Math.max.apply(Math, ra);
                                      if (n) {
                                        if (e >= 3 && ia === na)
                                          return Object(u.jsx)("p", {
                                            style: {
                                              backgroundColor: "#2D74E7",
                                              padding: "7px 20px ",
                                              color: "white",
                                              borderRadius: "5px",
                                            },
                                            children: "Neutral",
                                          });
                                        if (e === ia) {
                                          if (3 === e)
                                            return Object(u.jsx)("div", {
                                              children: Object(u.jsx)("p", {
                                                color: {
                                                  backgroundColor: "#2ecc71",
                                                  padding: "7px 20px ",
                                                  color: "white",
                                                  borderRadius: "5px",
                                                },
                                                children: "Sell",
                                              }),
                                            });
                                          if (e > 3)
                                            return Object(u.jsxs)("p", {
                                              style: {
                                                backgroundColor: "#DC0000",
                                                padding: "7px 20px ",
                                                color: "white",
                                                borderRadius: "5px",
                                              },
                                              children: [" ", "Strong SELL"],
                                            });
                                        }
                                        if (e === na) {
                                          if (e >= 7)
                                            return Object(u.jsx)("p", {
                                              style: {
                                                backgroundColor: "#4E8109",
                                                padding: "7px 20px ",
                                                color: "white",
                                                borderRadius: "5px",
                                              },
                                              children: "Strongest BUY",
                                            });
                                          if (6 === e)
                                            return Object(u.jsx)("p", {
                                              style: {
                                                backgroundColor: "#67A90E",
                                                padding: "7px 20px ",
                                                color: "white",
                                                borderRadius: "5px",
                                              },
                                              children: "Strong BUY",
                                            });
                                          if (e >= 3)
                                            return Object(u.jsxs)("p", {
                                              style: {
                                                backgroundColor: "#90EA14",
                                                padding: "7px 20px ",
                                                color: "white",
                                                borderRadius: "5px",
                                              },
                                              children: [" ", "BUY"],
                                            });
                                        }
                                        if (e === sa)
                                          return Object(u.jsx)("p", {
                                            style: {
                                              backgroundColor: "#2D74E7",
                                              padding: "7px 20px ",
                                              color: "white",
                                              borderRadius: "5px",
                                            },
                                            children: "Neutral",
                                          });
                                      }
                                    })(),
                                  }),
                                  0 === Ht.length
                                    ? null
                                    : Object(u.jsx)(ne, { data: Ht }),
                                ],
                              })
                            : Object(u.jsx)(u.Fragment, {}),
                        ],
                      }),
                    })
                  : Object(u.jsx)(u.Fragment, {}),
                zt
                  ? Object(u.jsx)("div", {
                      className: "Chartwalidiv",
                      children: Object(u.jsx)($, {
                        style: { overflowX: "auto" },
                        category: Oe,
                        date: we,
                        data: Ae,
                        adx: Re,
                        plusDi: De,
                        minusDi: Je,
                        rsi: ze,
                        macd: qe,
                        macdexp9: Ye,
                        macdhi: tt,
                        mfi: nt,
                        cci: lt,
                        wr: ht,
                        ub: xt,
                        mb: vt,
                        lb: Nt,
                        sk: It,
                        sd: Lt,
                      }),
                    })
                  : Object(u.jsx)(u.Fragment, {}),
                zt
                  ? Object(u.jsxs)(P.a, {
                      component: D.a,
                      children: [
                        Object(u.jsxs)(A.a, {
                          className: b.table,
                          "aria-label": "customized table",
                          children: [
                            Object(u.jsx)(T.a, {
                              children: Object(u.jsx)(F.a, {
                                children:
                                  w.length > 0
                                    ? Object(u.jsx)(u.Fragment, {
                                        children: w.map(function (e, t) {
                                          return Object(u.jsx)(oe, {
                                            id: t,
                                            children: e,
                                          });
                                        }),
                                      })
                                    : Object(u.jsx)(u.Fragment, {}),
                              }),
                            }),
                            Object(u.jsx)(C.a, {
                              children: da
                                .slice(M * U, M * U + U)
                                .map(function (e, t) {
                                  return Object(u.jsx)(
                                    le,
                                    {
                                      children: w.map(function (a, c) {
                                        return Object(u.jsx)(oe, {
                                          style: {
                                            backgroundColor: "".concat(
                                              d[10 * M + t]
                                            ),
                                          },
                                          children: e[a],
                                        });
                                      }),
                                    },
                                    t
                                  );
                                }),
                            }),
                          ],
                        }),
                        Object(u.jsx)(q.a, {
                          rowsPerPageOptions: [10, 25, 100],
                          component: "div",
                          count: da.length,
                          rowsPerPage: U,
                          page: M,
                          onChangePage: Kt,
                          onChangeRowsPerPage: Yt,
                        }),
                      ],
                    })
                  : Object(u.jsxs)(P.a, {
                      component: D.a,
                      children: [
                        Object(u.jsxs)(A.a, {
                          className: b.table,
                          "aria-label": "customized table",
                          children: [
                            Object(u.jsx)(T.a, {
                              children: Object(u.jsx)(F.a, {
                                children:
                                  w.length > 0
                                    ? Object(u.jsx)(u.Fragment, {
                                        children: w.map(function (e, t) {
                                          return Object(u.jsx)(oe, {
                                            id: t,
                                            children: e,
                                          });
                                        }),
                                      })
                                    : Object(u.jsx)(u.Fragment, {}),
                              }),
                            }),
                            Object(u.jsx)(C.a, {
                              children: da
                                .slice(M * U, M * U + U)
                                .map(function (e, t) {
                                  return Object(u.jsx)(
                                    le,
                                    {
                                      children: w.map(function (t, a) {
                                        return Object(u.jsx)(oe, {
                                          children: e[t],
                                        });
                                      }),
                                    },
                                    t
                                  );
                                }),
                            }),
                          ],
                        }),
                        Object(u.jsx)(q.a, {
                          rowsPerPageOptions: [10, 25, 100],
                          component: "div",
                          count: da.length,
                          rowsPerPage: U,
                          page: M,
                          onChangePage: Kt,
                          onChangeRowsPerPage: Yt,
                        }),
                      ],
                    }),
                Object(u.jsxs)(Z.a, {
                  open: te,
                  onClose: Jt,
                  "aria-labelledby": "form-dialog-title",
                  children: [
                    Object(u.jsx)(K.a, {
                      children: Object(u.jsx)("div", {
                        className: "form",
                        style: { overflowY: "hidden" },
                        children: Object(u.jsx)(R.a, {
                          component: "main",
                          maxWidth: "xs",
                          style: { overflowY: "hidden", padding: "0" },
                          children: Object(u.jsx)(D.a, {
                            className: b.paper,
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              overflowY: "hidden",
                            },
                            children: Object(u.jsx)(se, {}),
                          }),
                        }),
                      }),
                    }),
                    Object(u.jsx)(Q.a, {
                      children: Object(u.jsx)(m.a, {
                        onClick: Jt,
                        color: "primary",
                        children: Object(u.jsx)("strong", {
                          style: { color: "red" },
                          children: "Cancel",
                        }),
                      }),
                    }),
                  ],
                }),
                Object(u.jsxs)(Z.a, {
                  open: pe,
                  onClose: Mt,
                  children: [
                    Object(u.jsx)(K.a, {}),
                    Object(u.jsx)(Q.a, {
                      children: Object(u.jsx)(m.a, {
                        onClick: Mt,
                        color: "primary",
                        children: Object(u.jsx)("strong", {
                          style: { color: "red" },
                          children: "Cancel",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      var be = a(664),
        he = function (e) {
          var t = e.whole,
            a = Object(c.useState)(JSON.parse(localStorage.getItem("profile"))),
            r = Object(i.a)(a, 2),
            n = r[0],
            s =
              (r[1],
              function (e) {
                t || e.preventDefault();
              });
          return Object(u.jsxs)(u.Fragment, {
            children: [
              n
                ? Object(u.jsx)(u.Fragment, {})
                : Object(u.jsx)("center", {
                    style: { margin: "20px auto 0px auto" },
                    children: Object(u.jsx)(be.a, {
                      severity: "error",
                      children: "You need to login to see PGR Predictions !!",
                    }),
                  }),
              Object(u.jsxs)("div", {
                className: "tableSelect",
                children: [
                  Object(u.jsx)(d.c, {
                    className: "navT navt",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/psar",
                    children: "PSAR Trend",
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/adx",
                    children: [
                      "ADX Indicators",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/rsi",
                    children: [
                      "RSI Indicators",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/macd",
                    children: [
                      "MACD Indicators",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/mfi",
                    children: [
                      "MFI Oscillators",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/cci",
                    children: [
                      "CCI Oscillators",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/wr",
                    children: [
                      "William %R Indicators",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/bb",
                    children: [
                      "Bollinger Bands",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/stoch",
                    children: [
                      "Stochastic Oscillators",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                  Object(u.jsxs)(d.c, {
                    className: "navT navt2",
                    exact: !0,
                    activeClassName: "acT",
                    onClick: s,
                    to: "/data/ichimoku",
                    children: [
                      " ",
                      "Chimoku Cloud",
                      " ",
                      t
                        ? ""
                        : Object(u.jsx)(L.a, {
                            style: {
                              width: "16px",
                              height: "16px",
                              color: "white",
                            },
                          }),
                      " ",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ge = a(277);
      a(249);
      V.a.defaults.baseURL = "http://pgrdemo.herokuapp.com";
      var pe = function (e) {
          e.name;
          var t = e.setName,
            a = (e.whole, e.setwhole),
            r = Object(l.g)(),
            n = Object(c.useState)([]),
            s = Object(i.a)(n, 2),
            o = s[0],
            d = s[1],
            j = (function () {
              var e = Object(N.a)(
                k.a.mark(function e() {
                  var t;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), V.a.get("/names/company");
                        case 2:
                          (t = e.sent), d(t.data);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            b = [];
          o.map(function (e, t) {
            return b.push({ name: e.symbol });
          }),
            Object(c.useEffect)(function () {
              j();
            }, []);
          var h = function (e) {
            t(e.name), a(null), r.push("/data/psar");
          };
          return Object(u.jsx)(B.a, {
            container: !0,
            spacing: 3,
            children: Object(u.jsx)(B.a, {
              item: !0,
              xs: 12,
              children: Object(u.jsxs)("form", {
                onSubmit: function (e) {
                  return h();
                },
                className: "App",
                children: [
                  Object(u.jsx)("br", {}),
                  Object(u.jsx)("header", {
                    className: "App-header",
                    children: Object(u.jsxs)("div", {
                      className: "appwidth",
                      children: [
                        Object(u.jsx)("h3", {
                          style: {
                            marginBottom: "5px",
                            marginLeft: "20px",
                            color: "#2c3e50",
                          },
                          children: " Enter stock/symbol",
                        }),
                        Object(u.jsx)(ge.ReactSearchAutocomplete, {
                          items: b,
                          onSearch: function (e, c) {
                            "" == e && (t(""), a(null));
                          },
                          onHover: function (e) {},
                          onSelect: h,
                          onFocus: function () {},
                          autoFocus: !0,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        me = function (e) {
          var t = e.history,
            a = Object(c.useState)(""),
            r = Object(i.a)(a, 2),
            n = r[0],
            s = r[1],
            o = Object(c.useState)(null),
            l = Object(i.a)(o, 2),
            d = l[0],
            j = l[1],
            b = Object(c.useState)(!1),
            h = Object(i.a)(b, 2);
          h[0], h[1];
          return "" == n
            ? Object(u.jsx)("div", {
                className: "SearchBar",
                children: Object(u.jsx)(pe, {
                  name: n,
                  setName: s,
                  whole: d,
                  setwhole: j,
                }),
              })
            : Object(u.jsxs)(u.Fragment, {
                children: [
                  Object(u.jsx)("div", {
                    className: "SearchBar",
                    children: Object(u.jsx)(pe, {
                      name: n,
                      setName: s,
                      whole: d,
                      setwhole: j,
                    }),
                  }),
                  Object(u.jsx)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      overflowX: "auto",
                    },
                    children: Object(u.jsx)(he, { whole: d }),
                  }),
                  Object(u.jsx)("div", {
                    className: "tablesCSS",
                    children: Object(u.jsx)(je, {
                      history: t,
                      whole: d,
                      setwhole: j,
                      name: n,
                    }),
                  }),
                ],
              });
        },
        xe = a(93),
        ue = (a(150), a.p + "static/media/service.560dcb71.png"),
        Oe = a(651),
        fe = a(652),
        ve = a(654),
        ye = a(653),
        we = Object(j.a)({ root: { maxWidth: 345 } });
      function ke(e) {
        we();
        return Object(u.jsx)(Oe.a, {
          className: "Card",
          children: Object(u.jsxs)(fe.a, {
            children: [
              Object(u.jsx)(ye.a, {
                component: "img",
                alt: "Contemplative Reptile",
                height: "140",
                image: e.img,
                title: "Contemplative Reptile",
              }),
              Object(u.jsxs)(ve.a, {
                children: [
                  Object(u.jsx)(ee.a, {
                    gutterBottom: !0,
                    variant: "h5",
                    component: "h2",
                    children: Object(u.jsx)("b", { children: e.tit }),
                  }),
                  Object(u.jsx)(ee.a, {
                    variant: "body2",
                    color: "textSecondary",
                    component: "p",
                    children: Object(u.jsx)("b", { children: e.txt }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Ne = a.p + "static/media/img1.ba0f4b2f.png",
        Se = a.p + "static/media/img2.ab65b0fa.png",
        Ae = a.p + "static/media/img3.3ace3bd5.png",
        Ce =
          "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAAF4CAYAAABeneKmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAIHZJREFUeNrsnW1sVceZgCe3BhywjENdDGyD3abQKsnWtrpRd0tSnE21Lcqu4m3E5sdqy6WR9lcU4Fe0SKs6qpQmfxqDUH+slGJ2f1ErWyNtRCr147oNW23ZytdtUjXQNMab8hUwtmMcg13Y89pz6QV/nXvuzDkz5zyPdHUTEux7ZuY+5z3vvDNz182bNxUAAKSPHE0AAIDgAQAAwQMAAIIHAAAEDwAACB4AAMHTBAAA6aSGJgBX2do73BK8teh/Lf/nhf49KqPBq3jHnxVK/3Bq5+YCPQG+chcLnSBhed/5agherQ5+5LGyG0Gh7H00uAkU6VFA8JBFkbdpcbfplwh8ewov9UzwGtI3gdJ7MZD/KKMAEDykQeYdZSJvczQST0r8hTLpD9EsgODBZZlLVF4Segcyr1j6xZL0yfMDggdXhF56NdMqRunXwi8gfEDwYFvoDVrknQg9MeH3aeEziQsIHqqWeindklekXFzijI7u+wLZ99EcgOChEqnndaROlO4Hx3R030eVDiB4uFPqHWVSX0uLIHtA8ECkDsgeEDw4IvUWLfS9SD1TjGnR91CRg+BphfSJvVNH60/QGplHJmi7dVQ/RHMgePA3Ws/rF9E6LMQRonoED36JvUNLfRetARVE9V2KXD2CB2fFLlKX3Dr16hAVydX3BK9u0jcIHpKXeoOWusidNAyY5IgWPatmETwkJHZ5UbcONpEtErrI0yN4QOyA6AHBA2IHRA8IHrEjdkD0gOARO0Aios9TdYPgIZzc82quJpmqGPAJqbrZSx09goeFxd6h5paQU8cOvjKmx3A3okfwoG5tKSBfCvaJgbRwRkfzHEaC4DMt9y5Fnh3SC/l5BJ9JsXeouSXh5NkhCzyvSNsg+AyIvUGLnXQMZA3SNgg+1XKXVEyXIh0D2UZOmcoTzSP4tIi9RUft22kNgFnGtOSJ5hE8UTsA0TwgeKJ2AKJ5QPAW5d6p5U7UDkA0j+BTInYqZACq44yWfIGmsEOOJogk97bgrYjcAapC1oX8RC8ABCJ4J+QuE6kv0xIARhkMXp2sgkXwSYmdlAyAXZiANQwpmnByJyUDYB8pVPg+KRsi+Djlng/eDtMSALEiG5d1UmVDBG9T7j3IHSARZE1JUT89AxG8UbFLvr2gOIwDIGkkLy+blvXQFETwJuQuEcMQcgdwAsnLHw6+l900BRF8tXLPq7nTlliVCuAenAOL4CPLnfp2APeRevkOJB8OUjTq1mQqcgdwH0mdMvlKBB9K7CxeAvCTMR3JF2kKIvjF5F5A7gBeIvNkA3reDBD8gnKnUgbAbw4jeQRfLnfKIAHSJ/m9NMN8MpWD13IvKMogAdLIkVM7NxPNZzGCR+4AqWeXroiDLAkeuQMgeQSP3AEAySN45A4ASB7BI3cAQPIIHrkDAJJH8MgdAJB8dgSP3AFgCcnnEby/ci9tHIbcAWAhMretQSoEz94yAIDk0xvB9yF3AAhJd1b2k/de8HryZDtjFgBCImncQhYk77Xggw7qCt52MV4BIILke3R6F8E7KPd88PYNxikARETSugUE757c5dHqMOMTAKqVfJpr5L0TfNAZLWm/6wJArOxK64EhXh34QTkkAFjk70/t3NxHBJ8c3cgdACzRk7bKGm8Erx+hqJgBAFukrrLGC8EHDd4RvL3M+AMAy0iGoAfBxyd3uZv2Me4AICaeSMukqw8RfEGxgRgAxMvLOnOA4C1G70yqAkBS9Pmej69xWO5y99zDGKuepzetVn/zyTp1YWJGnb86oy4Er9+OT6sTE9M0DsDizE66Bq9OXy/AyTp4fdccUqRmjHGwbZ36ypa6eX8+cG5KnXhvUv34/JR6c2qGhgKYz75TOzd3I3hzgi8odoiMTfIlzo3PqFffHkf2APNpDyRfRPDVy11mrymJTEjyJV4/PaGO/u4D0jgAcwwGr45A8qMIPrrcZRXZAGPJDckLbwxNqm//epSIHkCpA4HgvSqfdE3w8ghE1YxjkhdefWs8GN3j6vzMDRoPssyjgeQLCL5yuXcp9nd3WvKSo3/xF5fV8SvXaDzIKmeCV5svqRon6uB1aga5x8yzxZHZXHtYNtbXqANfalLfur+BxoOs0hy8unz5sK4sdOph3PgheeHJB+rV0YfXqw01ORoQssgeX1a5Jv4N1akZ8u6eSb59Y6165ZH1alvdChoQsogXu04mKnh9OhOpGU8lv6VxpTr0WBOShyziRaom6Qi+h3Hit+TXrMwhecgqe1w/ICQxwQcNk1esVk2V5MnJQwZxOkhN5Bupc1fdjI10SV5y8kgeMkary3vHJ/VtFLmzkVjKJC85+f0PUkLpO3KTllLY1x7dwA07HF2uTrjG3ns6Z8XZqimVvCyceraljsbzlKfW362OPrZhthRWbtg8lYVirXI0I5FEz5Ga8YjjZ65W/Hd2tzaoB2traDzPovbvPtSovrn9Y7ML2sqfypB8KHa5WBsfa68xseof7Y2rKv47ko//179YR+N5FLUff3yTerhl9YL/HcmHpiuzgtc5qi7GgF+0NtVGuzFsrJ09SQrcRZ6yZEWyRO1yU14KJB+K7TqIzWQELzPNzYwBvx7bRdRR+dqfNyAER5F5kv/48oaK+hfJh4viXZpwjaWn9AXvpe89C0fWrarq70su9+ufYMLVJWRBmkTtzzy0btmoHclHotkl18XVS5RFekhb46qqf8bO++tpSEfYv6VeHd6xsaqnMiQfir2uRPHWe0jvN0NZpId8tqm26p8hUSK5+OSjdqlpz7eZcw6SXxIJZruyEsF30d/+IRNw8iU2wVc/TRSfBKUFSxK1m+pLJB+aPTq4Ta/gid795fPrVhoVAZuRxcuOe1bdWrBkEyTvdnBru1d66GM/aV1fa/Tn/e3mNTRqTFG7HMUoJ2+VL1iyLfn7aj9C489nV9JRvDXB61VdmVrUJAtG0hLJtDaZFfwX7iUPH8f4kwVLlZyzawI5kP3ExDQd4GAUn0vrhSXB1x5Ym4rHVUmnmI7+5OexfYG9qL20zUCU0sdqkIPYD5wapxMcjeKtjAZ9QZnbkkAeVdOQk/ycgfLIhTCZ14c5ZMHSUtsM2OY7A1fU+ZkbdISjwW4ubReUFDKpVS56nyXf9rFaKz/XdF4/y5S2GYi6YMkEbwxNqqMXP6QzHI7ijY+MrFbO3Lkpl8+StxUN3ncPEbwJZMFSpdsMmObq9Rtq/8AIneF40JtLy4UkzYY18/PLPkq+/EnENDZqsbNE+YKlpKL2EodOjpCaqYzOJFa3Gh0l+gIyWffeVFezqNR8knx74yqrP5+J1uhRu60FS5UycG5KvXJ2kk6pDFndGvseNaatk9kNxRaK4H2U/LaP252su/du6qUrfaLq//Imo9sMVIOkZr75v6RmfPEjgjfEcmWFPkhePhtpFLeIc8FSGA4Pjqo3p2bomIhRfNz7xRuzjf7g7BjpseSr3R44VBusZcuCSqJ3l5DUzMGhCTqmOrp8jeC76Du/Jd/WaF8odSvYsyQs9Y611cHiFTqleprjPLvVyAjSH5jTmjyXPNsJuMV9Dj3t9BRH2Y7AHLGlsk0ZJk+f+S15qW5xKdcLS0/cx8npS9fVC6fZjsAgT8S18Klqu2S5NDJNko9rG4ELV5mgC8tipbdxc4jUjA1iCYpzvnxQJG+XuLYROPvhH+l0jyJ42Sny+JVrdEaGBc9h2vox1jfJS5WGLKCR1ZFxbzELy5N0yoydIq0ik62dtn9JVSOIydU/MTFd3bLtkuSf/tlFa0vAZam77BQpm4kltfvgwAdM1IXtq6R58ReX2Y7AfhTf56zgFemZW/x+5Lqx0+pNSV4mTiW3LukXOcAj6YhQVkEijHAkXSL5+ukJUjP2kcnWhlM7N486J3g9udpJH+nH2Ukzk4fVSF5SPLJYSerZPxsI3bVVqacuX2eghKS9MblFTnIjfuHNUTohvii+28UIXuTOylXNLy+Zi3Yqkbzk0UUGEqEnuX1s2KccCMenGpK7Ob/4c1IzCJ7o/TZkEYhEPqa2cV1M8uV59PZNtYlvG1sJxUs88odBDs1Oao6EQzxip1Vq4k/t3DzkjOB1kf4T9M3tDJydMvrFLEn+P98edyaPXg39Iwg+jNyTqmiSAOXbvyY1kwB7laVqxKjhH9H7QlH8H8zvkS2Sf25b4+yX3me5y0ZVPPa7K3eBnSITw5pPowo+T5/M57WLUzTCYje/9zggwmW5s1NkokhNfJsTgtfpmVb6ZD4SoUoOE+bzPQTvrNw5xMMJrATNUSJ40jNLRap/QGQL8fj6WhrBQbkLvb8ZJzWTPFa8iuANI2dVyhJvuB2ZR3h6E9sRuyZ3dop0BitpmooErxc3bacvlubVt/nCIHn35S68cPIynZHiKD6X9AdII5JvlrwmIHmX5c4hHggewUdAJlsPnWTSCsm7K3dJI373XapmHKPV9EEglRZWd9AH4ZBc/FcvXXduPxiXJK9OXJptJ+RuH3milL2ALkzMqPNXZ1T/uQ9Zl+Am4tie2AWvtwZm75kKkJNwDnypiYZA8rHI/U6JvzM2rcanb7ArpF90JiJ4RXqmYuSL9cW3xtWTD9TTGBmWfBxyfyljT0Mpj+CNkUvqF2eFf/nNaFWnPWVF8mnNySN3qJC1OlsSn+B1eSSrV6MK7OeXqKrJoOSROyQdxYeN4EnPVIGsEtz/0/dpiAxJHrlDFRjzbVjBd9Dm1SH5ePlCQvolj9yhSlp11gTB+4R8IZF8uiWP3MEQRpy7rOB14X0z7Y3kkTxyh5QJPqCNtrYjeSZe0yN55A6GMeLdMILvoK3tSP6ZH11g58kUSB65gwWMbOqI4BNENnp66kfnOSTEY8kjd7CFiXr4MIKn/t0ish/I109emt2cjJSNX5JH7mCZqtM0Odt3EAgpi6EJteO1s+r10+zw54PkkTvEgPUIngnWmKP5Z4sjas8PL8weggxuSh65QyoieASfDLIo6qk3Lqrdx88R0TsmeeQOMdJc7YInBO8wMgkrEf0Xv//e7Jfe5qZlUs3z6lvj3txUkpA8cgffovi7bt68ueh/DO4eN2lft9hQk1OPr69VrcHrvntWRj5QRIT+zsh1VXx/Sv3y0rV5R7e5cvKQK0JE7pAQz5/aubnLuOD1BOtPaF/32Va3QtWvyKn2xlVL/n+lAyAGPpgOdZoPkkfukDjHAsFH3nxsqQM/WmhbPyhF36ZP7pH00MHg3XXJ2zw0BLlDwlTl4aVy8OTfYVbyWc3JI3dwgKrWISF4QPLIHRxma+9wZBcjeEDyyB3cpsWG4NfSrpA1ySN3cBCzETxbFEAWJY/cISsRfANtClmSPHKHLAme/DtkRvLIHRzH+CRrC20KWYzkkTs4SOT5UAQPmZe8zWtA7mCCqPOiCB6QvKVrQO6QNIsJvpmmASSP3MEZzETw1e4/DEg+65JH7uByBE8FDSD5iNeA3MESLaYED4DkI1wDcgcfBE8ED0i+wmtA7uAiCwmeHDwg+QquAblDDGw3JXgAJB/yGpA7+BbBk6IBJB/iGpA7+Ch4UjSA5Je5BuQOcRPl4A9SNIDkK5T8nh9eQO6QBBUH3wgekHyFkjd9uDmALcjBA5KPIHkAXwXPUX2A5JE8uAcpGkDySB5SCpOsgOSRPACCBySP5AHBAyB5JA8IHgDJAyB4ACQPgOABySN5AAQPfrGhJofkAeIQ/Nbe4RaaBOJiW90KdfzxTbEcgo3kIfOCP7Vz8xBNAnHJ/dBjTWrNypz1Q7CRPCB4gATkHkaQSB4AwYOnckfyAAgeUix3JA+A4CHFckfyAAgeUix3JA+A4CHFckfyAAgeUix3JA8wj6IJwY/RjuCC3JE8wG2MmhB8kXYEV+SO5AGiQ4oGnJc7kgdA8JBiuSN5ADMpmlHaEVyUO5KHLHNq52Yjk6zk4MFZuSN5gOoED+C03JE8QHTBk6IB5+WO5CFj9JsSPCka8ELuSB6gcsEDeCN3JA8ZYYgIHjIpdyQPCD6k4E/t3EwOHryTe7kgn1p/N5IHUIunaM7QNOCb3IXTl66r/pFri/53JA+eUojyl2qWeBxopk3BN7k//bOL6vzMjSX/P5H8weD9K1vqnJe8OnFJvXJ2csn/b8c9q9SWtStU3Yqc+lTDSrVm1eL99PuR6+qD6RvqnbFp9d7kjDoxMc0ATzF33bx5c94fbu0d7gnedtE8kDa5l3OwbZ3zkhdeukPykoJqa1ylPttUq7Y0rqzqZ1+9fkMNnJ1Sxfen1I/PT6k3p2YY9A5yaufmu0wKvit4+wbNitzTKnffJN9THFUb1tSoR5pXW+0PacsfvDuhvvfeZKT2BCuMBYJvMCn4zuDt+7Qrck+z3H2TfNzIXMW//XacqD55+gPBd0T5i4t9e6mkQe6ZkLvgy8Rr3MhN7z//btPsDfDB2hoaJDmGov7FBb/Bwd2iQJsi9yzIHcmHF/3+LfVqQw1rI70XvIaj+5B7JuSO5MORb2tQRx/bMFu1A7ESefFpzsYPBeTum9yRfDg21teoA19qUt+6v4HG8DyCR/DIPVNyR/LhefKBenX04fWkbGIgykEfCB6QO5KvivaNteqVR9bPjiGwxmA1fzln47EAkLvPckfy4ZGFVjKGkLw1qvJwbonHggJti9yzKnckHx4ZQ0jeGlVlUpb7dg/Svsg9q3JH8pVLnnp541QVaC/3DScPj9wzLXckX5nkX/qrRiZePYrgETxyz7zckXx4JCf/Qvs6GsIMZ6o9nwPBI3fkjuSN8nDLavVsC3v7JB29Lyt4JlqRO3JH8lF45qF1TLpWT9X+DfONZ6IVuSN3JF8x+x/6KI3gcgRv6i4CyD1Nckfy4ZB8PKma6JjIoCB45I7ckbw1drc2UFUTjX4TPyRMyzPRityRO5KPhIzBr3+CKD4CRry7rAGCx4Sh4O0M7Y3ckTuSj8LO+9lHPgKFuCJ4Y78MkHsa5Y7kl4/i/+Hjq2kIBA/I3X/JvzE0yYC8gyc/XU8jhGew2gVOlQq+jzZH7sgdoiIHhXASVGiM+TaUEfTdhHp45I7cl0FyzbKSE+azo3kNjRCOQqyCN/1LAbmnlcfX1zIwF+GRZm58IRgzuYNAJWYgTYPckfty/fJnSGwxZKyyfUG8gXRoO+i7yhjtj9yR++K0b/Irgj83PjNb+fPSiUvq0MkR67/vc43k4eMMpCvdnV8k/wR9gNyR+8J943q/XL1+Qw2cnVLF96fUj89PqTenZub99+e2NVr7/W0fC26AQ5SSxhXBVyr4PgSP3JH7wnym3s30w8C5KTV4YUoNXLqmjl+5tuT/+8rZSaWCaN6W5O9bt5Iv8uIM6oWliQr+MP2A3JH7fJrW1DjTB78KhF4MhN4/cq3ivrApeSmXhCX9apSKWlvKJbf2DssmONvpC+SO3G+ntSmZ/LukVX52ZlINXpxS/zNyfV7aJQo2JS/18Ms9SSD4ZCL40odA8MgduSeITI6++va4+mUQpZ+YmLbyO2yna+A25Hg+4xs7RrEG5ZLIHbkvwNaPxpdflpz6waEJa3Ivl7xU2Jhky1pKJePyasXm0JMArGpF7sj9DuLsK0nHxIVpydetYGfJBehxQvA2PwwgdwiH5NrjxEYkD7ewkp6pRvCkaZA7ck+w7U1MpCJ5Z7Dm00gW0WmaY/QLcof4kRLIpEDyVuh2SvBE8cgduSeH1LcnCZI3ivHFTSYFz940yB00UroYB7J4KWmqkfyFqzMMlj/RY/OHRzaK3iOeKB65g+Z8DOKSbQdc6YOokj/74R8ZLK4LPo4Pl3bkcAjknh6uXrPfPoMJ5t9NSX58mnGkOWbqaD4rgtdbCJ+hn6LxQvs65J4ifjdqv3Sx/9yHzl13pZK3vTiL6N1cBC9000+VI/txuH60G3KvjHfG7IpL9pxxVY5hJS9jCmaR2nfrKW4Tgu+hryon/8Ba5J4y3hq3K1/Zx91lwkj+nSsIPk5vVi14nUM6Qn+FRyZW2ze6e/IPco+GLD6SKNsWckiH6ywn+TjSWAjebARPFF8h2zfejdxTimzbaws5gckHlpK8L9dgmWM2a9+NC57J1spIat9w5G4fW5uASY19EtsTmJS8b9dgkdjmLU2WcHTRb+FwcTc95G6G1ywJ3rXyyCiS/+//m2SAzE2uFrwTfPChexQrW0OxpdGtcymRuzmkDd8YMi+yOLcHtiX5/xq+ygCJORA2HUpSMukZyN08PzhjXmSvXfQ3dy2S3338HPXvQQCsA2EEn2ZsVlog9+Q5evFDo/vSSD/53kfIPRk/GhU8JZMh2+ly8qViyN0u//5rcyvQf3WBypM0RO/eC17TRV8uze9HkhU8crePpCVMRfFNa2poUP/ps73vTCyC1/WdRPFLkOR+3sjdvyhetrQ42LaOBvWbRALfXJouxhckR5tEHh65xx/Fm9p75Stb6pC8vxyJa2FTLILXF9NPvy5O72/GkXsGeOHkZWM/C8kTvbsSwRPFL8N3352I7QQg5J4cUj3SUzSXekXyRO9OCF6v1iKKXwSR7Yu/uGz99yB3B6L40+NGt8lF8kTvLkTwQp7+XZzjV65ZPbwYubvDcz+/ZHTeBckTvScueCpqlsfWCfXI3S1kk639P33f6M9E8kTvSUfwTlxk1iSP3LPzxIbkneVA0tF7LIIniq9M8tU+xstGV8g9W09sSN45xlwJbO+6efOm9V+ytXe4IXgT0a+l75fmwdoa9c+fqZ/90laCVOR8Z+DKbI09uM/Tm1ar57Y1Gv2Zr5+eUM8WR2jc5Hk+CGyzI3gtebngb9D34UX/j5+sU1+4d7XaWF+zZMR+4g+Ts5Eh+Cf5Zx5ap9asNPcgTXouceTgo7YktiVIWvASxReDVzNjoHLZ33v3R277s/HpG+zQlwLkfN5DjzUh+fSwO+4tgZ0QvJZ8Png7zBgA+BMbanLqwF82Gj2IHcknQn8g9w6XPlCsZ8fpOxuLnwDKEAk/9cZFdejkiLFaeTk17JVH1s/ePCA2ulz7QEn0/l7GAcB8Dg5NqH/6wXljR/4h+Vg5EudZq2GJNUVTYmvvsGx8v4cxAbAwO+5ZpfIPrDWStiFdYx0pi2xxZWLVBcFTNgkQUvQ7mtdUXDaL5GNlXyB3J48rTUTwWvJ5xYQrQCikkuqvN9SqL3+ibjb1guSdYTCQe5urHy4xwWvJF4K37YwRgMpk//l1K1Xr+lrV2lS75DoJJG+d9kDwRVc/XNKHPUoU/y5jBCA8snHZm2dnlCpb3CapnPoVOXXf2hW3/mzDmhrVVFejBssO7Z6YRuwGOeCy3BOP4HUU36VY4QoAfuHUilVnBa8lL3fBVsYMAHjCoy6WRd6JKwWyecYLAHjCAR/k7ozgdR7recYNADiOpGa6fPmwTqRoSpCqAQDHedSX6N2ZCL6MPOMHABzlgE9yd07wOlWzj3EEAI4xqDw8ftSpFE0JFkABgGO0u17z7nwEX0anmtvABwAgafb5KHdnBa8XD3QyrgAgYY65upGYzxG80pMZBxhfAJAQkkXI+3wBTubgy6F0EgAS4lHfqma8ieDL6FDk4wEgXvb5LncvBE8+HgBixuu8u28RfCkfT308ANhG6t3zabkY53Pw5WztHe4J3nYxBgHAApIK7vC1JNLbCL6MvfoOCwBgmnya5O6d4Mvy8Uy6AoBJZFK1L20X5VWKpsTW3mE55HaAMQkABjgSyD2fxgvL+fih9WPUbsYlAFTJYFrl7q3gteR7FIeEAEAVcldz62xSi5cpmnKorAGACKSuYiaVgteSLyi2FwYA5H4buZRcR6eifBIAwrE3C3JPjeB1+WQHkgeAZdit5+8yQSpSNCW29g63BG9yZ17LOAaALMs9NRF8WSQ/pNh9EgDmcyRrck+d4LXki0geAO6Qez6LF55L40UheQDIutxTK3gkDwBZl3uqBY/kAZB71hshl/YLRPIAyB3BI3kAQO4IHskDAHJH8EgeAOJgH3KfT6pWsoZla+9wQ/BWCF6tDAEA79mdxUVMRPCLR/LsXQOA3BF8BiR/jGEA4B2SZm1H7kuTyRTNnXBoCIBXnAlenVnZ8pcIvvpoPh+87aMlAJxH0qptyB3BVyr5bjV3kDcVNgBuckTNncQ0SlOEgxTNHWztHW5TcxU27CkP4A4HArHvpRmI4KuN5OXRr0VRYQPgAvJEvRu5E8HbiOZ7FJOvAEnBZCoRvNVoPq/m8vIAEC/9islUIviYInnJy/cFr2ZaA8A6zwdi76IZEHyckpftDXqC1xO0BoAVJN+eD+TeR1Mg+KREL5M9L9MSAEaRogbJtw/RFAg+acmTsgEwBykZBO+c5EnZAFSHVMlISqZAUyB4V0XfqUXPwiiA8BzTcmdVKoJ3XvItWvLbaQ2AJWEiFcF7K3qZgO0imgcgakfwRPMARO2A4InmAYjaAcG7JHkqbSCrSIXMXqJ2BJ8F0Xdo0VM3D1ng+eDVTdSO4LMm+i6JahRpG0gnskFYntWoCD7Lkm+R6EaRtoH0QDoGwcMdou/Qom+lNcBTxvQYJh2D4GER0efVXLUN+XnwiSM6akfsCB5CiF4kT34eXIc8O4KHiJJv0JJH9OCi2LvYGAzBA6IHxA4IHhA9IHZA8Ige0QNiBwSfctHnteipugGTSFWMlDsWaQoED8nLviR66ughKlLH3qPFPkRzIHhwT/QdOqrfRWtASGTlaVfw6qOOHcGDH6Jv0aKXF+kbWAhJw/SQX0fw4LfsO7Xo2e8GJFrv1tH6EM2B4CFdUX1J9uTqs4Pk1vuI1gHBZ0f2bVr0InxSOOnkmI7Ue2gKQPDZlv1eLXvq6lMgdcWEKSB4ILJH6oDgIbuy71Dk7F1DJkoLWugcqgEIHqqWfYOWfad+J7qPl34dpRdYXQoIHmwLv0WLvgPhWxN6QQu9QHMAggcXhF9K65DSCY+kXIpa6EWEDggefJB+SfjykhvAdlrllsxvvVhwBAge0iL9kuxL4m9IqfhF5ENa4kNlMqfKBRA8ZE78DWWRfvlL/tzFdE9J4EKh7H2USVBA8ACV3wRK0ldlN4ASpRtEtYzqaLucksAV+XFA8AAA4Bw5mgAAAMEDAACCBwAABA8AAAgeAAAQPAAAgqcJAADSyf8LMABWN3tGNUak/QAAAABJRU5ErkJggg==",
        Ie = a.p + "static/media/sunnysir.6b87e5fb.jpg",
        Pe = a.p + "static/media/priyanksir.6d875fec.png",
        Re = a(672),
        Te = a(280),
        Le = a.n(Te),
        Fe = a(655),
        De = a(665),
        Be = a(656),
        He = a(37),
        Ee = [
          {
            name: "Himanshu Mehra",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-5.png",
            category: "technical",
            titl: "Full Stack Developer",
          },
          {
            name: "Amisha Garg",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-8.png",
            category: "technical",
            titl: "Java Developer",
          },
          {
            name: "Raghav Gandotra",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-9.png",
            category: "technical",
            titl: "Java Developer",
          },
          {
            name: "Rishabh Shrivastava",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-10.png",
            category: "technical",
            titl: "Android App Developer",
          },
          {
            name: "Himanshu Khare",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-11.png",
            category: "technical",
            titl: "PHP Developer",
          },
          {
            name: "Aman Gautam",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-12.png",
            category: "technical",
            titl: "Android App Developer",
          },
          {
            name: "Shubham Garg",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-13.png",
            category: "technical",
            titl: "Animation Designer",
          },
          {
            name: "Adish Goyal",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-14.png",
            category: "technical",
            titl: "Full Stack Developer",
          },
          {
            name: "Anil Dhakad",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-15.jpeg",
            category: "technical",
            titl: "Full Stack Developer",
          },
          {
            name: "Ankur Dohare",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-6.png",
            category: "marketing",
            titl: "Java Developer",
          },
          {
            name: "Shweta Talreja",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-7.png",
            category: "marketing",
            titl: "Java Developer",
          },
          {
            name: "Ayushi Agarwal",
            imgsrc:
              "https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
            category: "hr",
            titl: "Human Resource - HR",
          },
        ],
        Je = [
          {
            name: "Ankur Dohare",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-6.png",
            category: "marketing",
            titl: "Java Developer",
          },
          {
            name: "Shweta Talreja",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-7.png",
            category: "marketing",
            titl: "Java Developer",
          },
        ],
        Me = [
          {
            name: "Himanshu Mehra",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-5.png",
            category: "technical",
            titl: "Full Stack Developer",
          },
          {
            name: "Amisha Garg",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-8.png",
            category: "technical",
            titl: "Java Developer",
          },
          {
            name: "Raghav Gandotra",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-9.png",
            category: "technical",
            titl: "Java Developer",
          },
          {
            name: "Rishabh Shrivastava",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-10.png",
            category: "technical",
            titl: "Android App Developer",
          },
          {
            name: "Himanshu Khare",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-11.png",
            category: "technical",
            titl: "PHP Developer",
          },
          {
            name: "Aman Gautam",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-12.png",
            category: "technical",
            titl: "Android App Developer",
          },
          {
            name: "Shubham Garg",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-13.png",
            category: "technical",
            titl: "Animation Designer",
          },
          {
            name: "Adish Goyal",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-14.png",
            category: "technical",
            titl: "Full Stack Developer",
          },
          {
            name: "Anil Dhakad",
            imgsrc:
              "https://www.praedicoglobalresearch.com/assets/img/team/team-15.jpeg",
            category: "technical",
            titl: "Full Stack Developer",
          },
        ],
        We = [
          {
            name: "Ayushi Agarwal",
            imgsrc:
              "https://cdn.landesa.org/wp-content/uploads/default-user-image.png",
            category: "hr",
            titl: "Human Resource - HR",
          },
        ];
      var Ge = function (e) {
        return Object(u.jsxs)(u.Fragment, {
          children: [
            Object(u.jsx)("div", {
              className: "cards",
              children: Object(u.jsxs)("div", {
                className: "card",
                children: [
                  Object(u.jsx)("img", {
                    src: e.img,
                    alt: "mypic",
                    className: "card_img",
                  }),
                  Object(u.jsxs)("div", {
                    className: "card_info",
                    children: [
                      Object(u.jsx)("span", {
                        className: "card_category",
                        children: e.tit,
                      }),
                      Object(u.jsx)("h3", {
                        className: "card_title",
                        children: e.txt,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(u.jsx)("div", {
              className: "cardsres",
              children: Object(u.jsxs)("div", {
                className: "card",
                children: [
                  Object(u.jsx)("img", {
                    src: e.img,
                    alt: "mypic",
                    className: "card_img",
                  }),
                  Object(u.jsxs)("div", {
                    className: "card_info",
                    children: [
                      Object(u.jsx)("span", {
                        className: "card_category",
                        children: e.tit,
                      }),
                      Object(u.jsx)("h3", {
                        className: "card_title",
                        children: e.txt,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var ze = function (e) {
          return Object(u.jsx)(u.Fragment, {
            children: Object(u.jsx)("div", {
              className: "cardsres",
              children: Object(u.jsxs)("div", {
                className: "card",
                children: [
                  Object(u.jsx)("img", {
                    src: e.img,
                    alt: "mypic",
                    className: "card_img",
                  }),
                  Object(u.jsxs)("div", {
                    className: "card_info",
                    children: [
                      Object(u.jsx)("span", {
                        className: "card_category",
                        children: e.tit,
                      }),
                      Object(u.jsx)("h3", {
                        className: "card_title",
                        children: e.txt,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Xe = ["children", "value", "index"];
      function Ue(e) {
        return Object(u.jsx)(Ge, {
          className: "cardsdd",
          img: e.imgsrc,
          tit: e.name,
          txt: e.titl,
        });
      }
      function Ve(e) {
        return Object(u.jsx)(ze, {
          className: "cardsdd",
          img: e.imgsrc,
          tit: e.name,
          txt: e.titl,
        });
      }
      function qe(e) {
        var t = e.children,
          a = e.value,
          c = e.index,
          r = Object(xe.a)(e, Xe);
        return Object(u.jsx)(
          "div",
          Object(y.a)(
            Object(y.a)(
              {
                role: "tabpanel",
                hidden: a !== c,
                id: "full-width-tabpanel-".concat(c),
                "aria-labelledby": "full-width-tab-".concat(c),
              },
              r
            ),
            {},
            {
              children:
                a === c &&
                Object(u.jsx)(te.a, {
                  p: 3,
                  children: Object(u.jsx)(ee.a, { children: t }),
                }),
            }
          )
        );
      }
      function Ze(e) {
        return {
          id: "full-width-tab-".concat(e),
          "aria-controls": "full-width-tabpanel-".concat(e),
        };
      }
      var Qe = Object(j.a)(function (e) {
          return {
            root: { backgroundColor: e.palette.background.paper, width: 1400 },
            large: { width: e.spacing(20), height: e.spacing(20) },
          };
        }),
        Ke = function () {
          var e = Qe(),
            t = Object(He.a)(),
            a = r.a.useState(0),
            c = Object(i.a)(a, 2),
            n = c[0],
            s = c[1],
            l = r.a.useState({ checkedA: !1, checkedB: !0 }),
            d = Object(i.a)(l, 2),
            j = d[0],
            b = (d[1], r.a.useState(!0)),
            h = Object(i.a)(b, 2),
            g = h[0],
            m = h[1];
          return (
            console.log(g),
            Object(u.jsx)(u.Fragment, {
              children: Object(u.jsxs)("div", {
                className: "Aboutcontent",
                children: [
                  Object(u.jsx)("div", {
                    className: "banner",
                    children: Object(u.jsx)("center", {
                      children: Object(u.jsx)("h2", {
                        className: "bannerh2",
                        children: "About Us",
                      }),
                    }),
                  }),
                  Object(u.jsxs)("div", {
                    className: "article",
                    children: [
                      Object(u.jsxs)("div", {
                        className: "articleup",
                        children: [
                          Object(u.jsxs)("div", {
                            className: "artlef",
                            children: [
                              Object(u.jsx)("h2", { children: "Who we are?" }),
                              Object(u.jsx)("hr", {}),
                              Object(u.jsx)("br", {}),
                              Object(u.jsx)("p", {
                                children:
                                  "Praedico Global Research Private Limited is a private company which is founded on 09 April, 2018. We deals in Stock Market Training, Stock Marketing Predictive Softwares, Robotic Stock Trading, Global Equity Research, Portfolio Designing, Financial Literacy and Stock Market Research Using Deep Learning.",
                              }),
                              Object(u.jsx)("br", {}),
                              Object(u.jsx)("p", {
                                children:
                                  "Sunny Ralli and Priyank Gupta are the Chief Research Officer and Chief Technical Officer of the company respectively. The Registered Number of the company is 045496 and the Registered Address is 2nd Floor 204, Garima Arcade Shinde Ki Chawani, Gwalior, MP. The working office of the company is situated in Malviya Nagar, South Delhi. Its authorized capital is Rs. 1,000,000 and paid up capital is 1,00,000. Their industry code is 74999.",
                              }),
                              Object(u.jsx)("br", {}),
                              Object(u.jsx)("p", {
                                children:
                                  'Praedico Global Research Pvt. Ltd. is India\'s first "coordinated worldwide research cum preparing" company. They take a shot at the model of spreading financial literacy all over the globe and have their own exploration model for India and worldwide stock trades.',
                              }),
                              Object(u.jsx)("br", {}),
                              Object(u.jsx)("p", {
                                children:
                                  "Praedico Global Research focuses on the use of artificial intelligence to forecast the trends in the stock markets across the globe. The company has achieved many successes within the limited period of time it has been in existence.",
                              }),
                              Object(u.jsx)("br", {}),
                              Object(u.jsx)("p", {
                                children:
                                  "Forecasting of stock trend has been limited to how well a trader or broker can consider the market forces or the economic and company information available. The risk associated with the stock market, implies reasoning beyond human ability has to be employed. It is due to this reason that, Praedico Global Research has been able to use Neural Networks which is a form of artificial intelligence to predict the stock market with the success rate of over 80%",
                              }),
                            ],
                          }),
                          Object(u.jsx)("div", {
                            className: "artrig",
                            children: Object(u.jsx)("center", {
                              children: Object(u.jsx)("img", {
                                src: o,
                                height: "50%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(u.jsxs)("div", {
                        className: "artbott",
                        children: [
                          Object(u.jsx)("p", {
                            children:
                              "With Praedico Global Research, robust softwares are built to be sensitive and identify trend on the stock market and make a high probable prediction with at least 80% confidence level.",
                          }),
                          Object(u.jsx)("br", {}),
                          Object(u.jsx)("p", {
                            children:
                              "The Company also conducts financial related workshops all over the globe. They offer their services to clients trading on stock markets all around the world. They use Financial Research and Neural Network Programming to develop hybrid products which can be used by traders and investors for better prediction of their investments.",
                          }),
                          Object(u.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
                  Object(u.jsxs)("div", {
                    className: "Ourservices",
                    children: [
                      Object(u.jsx)("div", {
                        className: "lser",
                        children: Object(u.jsx)("img", { src: ue }),
                      }),
                      Object(u.jsxs)("div", {
                        className: "rser",
                        children: [
                          Object(u.jsx)("h2", { children: "Our Services" }),
                          Object(u.jsx)("hr", {}),
                          Object(u.jsxs)("div", {
                            className: "cardss",
                            children: [
                              Object(u.jsx)("br", {}),
                              Object(u.jsxs)(B.a, {
                                container: !0,
                                spacing: 3,
                                children: [
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 6,
                                    children: Object(u.jsx)(ke, {
                                      img: Ne,
                                      tit: "ANALYSIS",
                                      txt: "We assist you with fundamental and technical analysis report of client's portfolio at certain time intervals.",
                                    }),
                                  }),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 6,
                                    children: Object(u.jsx)(ke, {
                                      img: Se,
                                      tit: "PERFORMANCES",
                                      txt: "We perform with a stock performance at different times with a target price of 6 months, 1 year, 3 years.",
                                    }),
                                  }),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 6,
                                    children: Object(u.jsx)(ke, {
                                      img: Ae,
                                      tit: "PORTFOLIO",
                                      txt: "We provide you with a service for a specific portfolio, which is specified at all times and in advance to meet your specific needs.",
                                    }),
                                  }),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 6,
                                    children: Object(u.jsx)(ke, {
                                      img: Ce,
                                      tit: "SERVICING",
                                      txt: "Classroom Special Workshop with Cash and Options Adventure.",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(u.jsxs)("div", {
                            className: "cardss2",
                            children: [
                              Object(u.jsx)("br", {}),
                              Object(u.jsxs)(B.a, {
                                container: !0,
                                spacing: 3,
                                children: [
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 12,
                                    children: Object(u.jsx)(ke, {
                                      img: Ne,
                                      tit: "ANALYSIS",
                                      txt: "We assist you with fundamental and technical analysis report of client's portfolio at certain time intervals.",
                                    }),
                                  }),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 12,
                                    children: Object(u.jsx)(ke, {
                                      img: Se,
                                      tit: "PERFORMANCES",
                                      txt: "We perform with a stock performance at different times with a target price of 6 months, 1 year, 3 years.",
                                    }),
                                  }),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 12,
                                    children: Object(u.jsx)(ke, {
                                      img: Ae,
                                      tit: "PORTFOLIO",
                                      txt: "We provide you with a service for a specific portfolio, which is specified at all times and in advance to meet your specific needs.",
                                    }),
                                  }),
                                  Object(u.jsx)(B.a, {
                                    item: !0,
                                    xs: 12,
                                    children: Object(u.jsx)(ke, {
                                      img: Ce,
                                      tit: "SERVICING",
                                      txt: "Classroom Special Workshop with Cash and Options Adventure.",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(u.jsxs)("div", {
                    className: "team",
                    children: [
                      Object(u.jsx)("center", {
                        children: Object(u.jsx)(ee.a, {
                          component: "div",
                          children: Object(u.jsx)("center", {
                            children: Object(u.jsxs)(B.a, {
                              component: "label",
                              container: !0,
                              alignItems: "center",
                              spacing: 1,
                              children: [
                                Object(u.jsx)(B.a, {
                                  item: !0,
                                  children: Object(u.jsx)("b", {
                                    children: "Leadership Team",
                                  }),
                                }),
                                Object(u.jsx)(B.a, {
                                  item: !0,
                                  children: Object(u.jsx)(Re.a, {
                                    checked: g ? j.checkedA : j.checkedB,
                                    value: g,
                                    onChange: function (e) {
                                      m(0 == g);
                                    },
                                  }),
                                }),
                                Object(u.jsx)(B.a, {
                                  item: !0,
                                  children: Object(u.jsx)("b", {
                                    children: "Team Members",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      g
                        ? Object(u.jsxs)(u.Fragment, {
                            children: [
                              Object(u.jsx)("br", {}),
                              Object(u.jsx)("center", {
                                children: Object(u.jsx)("h1", {
                                  color: "#2f3542",
                                  children: "Leadership Team",
                                }),
                              }),
                              Object(u.jsx)("br", {}),
                              Object(u.jsxs)("div", {
                                className: "upperled",
                                children: [
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)("div", {
                                    className: "upperledl",
                                    children: Object(u.jsx)("img", {
                                      src: Ie,
                                      width: "350",
                                      height: "350",
                                    }),
                                  }),
                                  Object(u.jsx)("div", {
                                    className: "upperledl2",
                                    children: Object(u.jsx)("center", {
                                      children: Object(u.jsx)(p.a, {
                                        alt: "Remy Sharp",
                                        src: Ie,
                                        className: e.large,
                                      }),
                                    }),
                                  }),
                                  Object(u.jsxs)("div", {
                                    className: "upperledr",
                                    children: [
                                      Object(u.jsx)("h2", {
                                        children:
                                          "MR. SUNNY RALLI, DIRECTOR, CHIEF RESEARCH OFFICER(CRO).",
                                      }),
                                      Object(u.jsx)("hr", {}),
                                      Object(u.jsx)("br", {}),
                                      Object(u.jsx)("p", {
                                        children:
                                          "Neural networks or neural nets were inspired by the Mr. Sunny Ralli is a B.Tech, M.B.A with more than 25000 hours of stock market trading experience .Being a seasoned Banker with over 7 years of experience with major brands like HDFC, CITI, AXIS & ICICI. He is a trading expert with over 10 years of trading experience in Indian & Global markets. He is a certified \u201cResearch Analyst\u201d & \u201cInvestment advisor\u201d from National Institute & Securities Markets.Apart from Indian stock exchanges experience he has worked closely on stocks of major global stock exchanges like NYSEC (New York Stock Exchange), EURONEXT(Brussels, Paris,Amsterdam) & Hong kong Stock Exchange Mr. Sunny is a National Stock Exchange Certified Market Professional Level 5(Highest Accolade)He is also awarded with NSE \u201cCertified Investment Analyst Champion\u201d & \u201cCertified Derivative Pro\u201dcertification .He attained mastership in both Technical & Fundamental analysis and has special knack of picking profitable stocks with high accuracy . Mr. Sunny is a proud founder of \u201cWorld\u2019s first 51 exclusive stock market strategies\u201d.Being Founder of 3 major trading firms like Millionaire Bull Securities,Stock Gurukul & Praedico Global Research ,Mr. Sunny has vision of demystifying the stock market myths around the globe and spread \u201cFinancial Freedom\u201d .",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(u.jsx)("br", {}),
                              Object(u.jsx)("br", {}),
                              Object(u.jsxs)("div", {
                                className: "lowerled",
                                children: [
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsxs)("div", {
                                    className: "lowerledl",
                                    children: [
                                      Object(u.jsx)("div", {
                                        className: "upperledl2",
                                        children: Object(u.jsx)("center", {
                                          children: Object(u.jsx)(p.a, {
                                            alt: "Remy Sharp",
                                            src: Pe,
                                            className: e.large,
                                          }),
                                        }),
                                      }),
                                      Object(u.jsx)("h2", {
                                        children:
                                          "MR. PRIYANK GUPTA,DIRECTOR,CHIEF TECHNICAL OFFICER(CTO).",
                                      }),
                                      Object(u.jsx)("hr", {}),
                                      Object(u.jsx)("br", {}),
                                      Object(u.jsx)("p", {
                                        children:
                                          "Mr. Priyank Gupta is a M.Sc, MPhil in Computer Science with more than 15 years of software programming experience .He has more than 8 years of Industrial Experience and has publish research papers in various National & International journals .Mr. Priyank is currently pursuing his PhD on the Neural Networks usage in stock trading . At Praeedico Global Research he is Head of Software Development & Operations.He is currently working on World\u2019s first Research driven trading platform under Praedico's innovative vision approach.",
                                      }),
                                    ],
                                  }),
                                  Object(u.jsx)("div", {
                                    className: "lowerledr",
                                    children: Object(u.jsx)("img", {
                                      src: Pe,
                                      width: "350",
                                      height: "350",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : Object(u.jsxs)(u.Fragment, {
                            children: [
                              Object(u.jsx)("div", {
                                className: "TeamMembers",
                                children: Object(u.jsxs)("div", {
                                  className: e.root,
                                  children: [
                                    Object(u.jsx)(Fe.a, {
                                      position: "static",
                                      color: "default",
                                      children: Object(u.jsxs)(De.a, {
                                        value: n,
                                        onChange: function (e, t) {
                                          s(t);
                                        },
                                        indicatorColor: "primary",
                                        textColor: "primary",
                                        variant: "fullWidth",
                                        "aria-label": "full width tabs example",
                                        children: [
                                          Object(u.jsx)(
                                            Be.a,
                                            Object(y.a)({ label: "All" }, Ze(0))
                                          ),
                                          Object(u.jsx)(
                                            Be.a,
                                            Object(y.a)(
                                              { label: "Marketing" },
                                              Ze(1)
                                            )
                                          ),
                                          Object(u.jsx)(
                                            Be.a,
                                            Object(y.a)(
                                              { label: "Technical" },
                                              Ze(2)
                                            )
                                          ),
                                          Object(u.jsx)(
                                            Be.a,
                                            Object(y.a)({ label: "HR" }, Ze(3))
                                          ),
                                        ],
                                      }),
                                    }),
                                    Object(u.jsxs)(Le.a, {
                                      axis:
                                        "rtl" === t.direction
                                          ? "x-reverse"
                                          : "x",
                                      index: n,
                                      onChangeIndex: function (e) {
                                        s(e);
                                      },
                                      children: [
                                        Object(u.jsx)(qe, {
                                          value: n,
                                          index: 0,
                                          dir: t.direction,
                                          children: Ee.map(Ue),
                                        }),
                                        Object(u.jsx)(qe, {
                                          value: n,
                                          index: 1,
                                          dir: t.direction,
                                          children: Je.map(Ue),
                                        }),
                                        Object(u.jsx)(qe, {
                                          value: n,
                                          index: 2,
                                          dir: t.direction,
                                          children: Me.map(Ue),
                                        }),
                                        Object(u.jsx)(qe, {
                                          value: n,
                                          index: 3,
                                          dir: t.direction,
                                          children: We.map(Ue),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(u.jsxs)("div", {
                                className: "TeamMembersres",
                                children: [Object(u.jsx)("hr", {}), Ee.map(Ve)],
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      a(494);
      var Ye = function (e) {
          return Object(u.jsx)("div", {
            children: Object(u.jsxs)("footer", {
              id: "footer",
              children: [
                Object(u.jsx)("div", {
                  className: "footer-top",
                  children: Object(u.jsx)("div", {
                    className: "container",
                    children: Object(u.jsxs)("div", {
                      className: "row",
                      children: [
                        Object(u.jsxs)("div", {
                          className: "col-lg-3 col-md-6 footer-contact",
                          children: [
                            Object(u.jsx)("h3", {
                              children: Object(u.jsx)("small", {
                                children: "Praedico Global Reseach",
                              }),
                            }),
                            Object(u.jsx)("img", {
                              src: "https://www.praedicoglobalresearch.com/logo.png",
                              width: "100px",
                              alt: "Logo",
                            }),
                          ],
                        }),
                        Object(u.jsxs)("div", {
                          className: "col-lg-3 col-md-6 footer-links",
                          children: [
                            Object(u.jsx)("h4", { children: "Useful Links" }),
                            Object(u.jsxs)("ul", {
                              style: { listStyleType: "none" },
                              children: [
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Home",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "About",
                                    }),
                                    ", \xa0",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Services",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Blogs",
                                    }),
                                    ", \xa0",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Gallery",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Career",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Contact",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(u.jsxs)("div", {
                          className: "col-lg-3 col-md-6 footer-links",
                          children: [
                            Object(u.jsx)("h4", { children: "Our Services" }),
                            Object(u.jsxs)("ul", {
                              style: { listStyleType: "none" },
                              children: [
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Web Design",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Web Development",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Product Management",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Marketing",
                                    }),
                                  ],
                                }),
                                Object(u.jsxs)("li", {
                                  children: [
                                    Object(u.jsx)("i", {
                                      className: "bx bx-chevron-right",
                                    }),
                                    " ",
                                    Object(u.jsx)("a", {
                                      href: "#",
                                      children: "Graphic Design",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(u.jsxs)("div", {
                          className: "col-lg-3 col-md-6 footer-newsletter",
                          children: [
                            Object(u.jsx)("h4", { children: "Contact Us" }),
                            Object(u.jsxs)("p", {
                              children: [
                                "HEAD OFFICE : Udyog Vihar,",
                                Object(u.jsx)("br", {}),
                                "Phase 4, Gurgaon",
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("br", {}),
                                "DATA CENTER : First Floor, Garima Arcade, Gwalior",
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("strong", { children: "Phone:" }),
                                " +91 9009054508",
                                Object(u.jsx)("br", {}),
                                Object(u.jsx)("strong", {
                                  children: "praedicoglobalresearch@gmail.com",
                                }),
                                Object(u.jsx)("br", {}),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                Object(u.jsxs)("div", {
                  className: "container d-lg-flex py-4",
                  children: [
                    Object(u.jsxs)("div", {
                      className: "mr-lg-auto text-center text-lg-left",
                      children: [
                        Object(u.jsxs)("div", {
                          className: "copyright",
                          children: [
                            "\xa9 Copyright ",
                            Object(u.jsx)("strong", {
                              children: Object(u.jsx)("span", {
                                children: "Praedico Global Reseach",
                              }),
                            }),
                            ". All Rights Reserved",
                          ],
                        }),
                        Object(u.jsx)("div", { className: "credits" }),
                      ],
                    }),
                    Object(u.jsxs)("div", {
                      className:
                        "social-links text-center text-lg-right pt-3 pt-lg-0",
                      children: [
                        Object(u.jsx)("a", {
                          href: "https://twitter.com/praedicol?lang=en",
                          target: "_blank",
                          className: "twitter",
                          children: Object(u.jsx)("i", {
                            className: "bx bxl-twitter",
                          }),
                        }),
                        Object(u.jsx)("a", {
                          href: "https://www.facebook.com/praedicoglobalresearch/",
                          target: "_blank",
                          className: "facebook",
                          children: Object(u.jsx)("i", {
                            className: "bx bxl-facebook",
                          }),
                        }),
                        Object(u.jsx)("a", {
                          href: "https://www.instagram.com/praedicoglobalresearchpgr/",
                          className: "instagram",
                          target: "_blank",
                          children: Object(u.jsx)("i", {
                            className: "bx bxl-instagram",
                          }),
                        }),
                        Object(u.jsx)("a", {
                          href: "https://www.linkedin.com/company/praedico-global-research-pvt-ltd/?originalSubdomain=in",
                          className: "linkedin",
                          target: "_blank",
                          children: Object(u.jsx)("i", {
                            className: "bx bxl-linkedin",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        _e = function () {
          return Object(u.jsxs)(u.Fragment, {
            children: [Object(u.jsx)(Ke, {}), Object(u.jsx)(Ye, {})],
          });
        },
        $e =
          (a(495),
          function () {
            var e = Object(c.useState)(
                JSON.parse(localStorage.getItem("profile"))
              ),
              t = Object(i.a)(e, 2),
              a = t[0];
            t[1];
            return (
              Object(c.useEffect)(function () {
                V.a
                  .get("http://pgrdemo.herokuapp.com/userlisttwo")
                  .then(function (e) {
                    e.data.userlist.map(function (e) {
                      var t = new Date().toString(),
                        c = new Date(e.lastupdate).toString(),
                        r = new Date();
                      if (
                        ((t =
                          (t = t.substring(0, 15).split("-"))[1] +
                          "-" +
                          t[2] +
                          "-" +
                          t[0]),
                        (t = new Date(t)),
                        (c =
                          (c = c.substring(0, 15).split("-"))[1] +
                          "-" +
                          c[2] +
                          "-" +
                          c[0]),
                        (c = new Date(c)).valueOf() > t.valueOf() ||
                          c.valueOf() < t.valueOf())
                      ) {
                        var n = new Date(e.lastdate).toString();
                        (n =
                          (n = n.substring(0, 15).split("-"))[1] +
                          "-" +
                          n[2] +
                          "-" +
                          n[0]),
                          (n = new Date(n)),
                          t.valueOf() <= n.valueOf()
                            ? (console.log(e),
                              V.a
                                .put(
                                  "http://pgrdemo.herokuapp.com/changestatus/".concat(
                                    e._id
                                  ),
                                  {
                                    payment: !0,
                                    adminpayment: !1,
                                    lastupdate: r,
                                  }
                                )
                                .then(function (e) {
                                  console.log("yes omcomiing"),
                                    a &&
                                      ((e.data.token = a.token),
                                      localStorage.setItem(
                                        "profile",
                                        JSON.stringify(e.data)
                                      ));
                                })
                                .catch(function (e) {
                                  console.log(e);
                                }))
                            : V.a
                                .put(
                                  "http://pgrdemo.herokuapp.com/changestatus/".concat(
                                    e._id
                                  ),
                                  {
                                    payment: !1,
                                    adminpayment: !1,
                                    lastupdate: r,
                                  }
                                )
                                .then(function (e) {
                                  console.log("yes Completed"),
                                    a &&
                                      ((e.data.token = a.token),
                                      localStorage.setItem(
                                        "profile",
                                        JSON.stringify(e.data)
                                      ));
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                      }
                    });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }, []),
              Object(u.jsxs)(u.Fragment, {
                children: [
                  Object(u.jsx)(g.NotificationContainer, {}),
                  Object(u.jsx)("div", {
                    className: "heading-img",
                    children: Object(u.jsxs)("div", {
                      className: "container mb-3 aos-init aos-animate",
                      children: [
                        Object(u.jsx)("h1", {
                          children: "Welcome to Praedico",
                        }),
                        Object(u.jsx)("h2", {
                          children: Object(u.jsx)("small", {
                            children:
                              "Global Exquisite Robotic Stock Analyzer, Prophesying Market Trend accompanied by Neural Network & Artificial  Intelligence based Soft Wares.",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsxs)("section", {
                    id: "why-us",
                    className: "why-us",
                    children: [
                      Object(u.jsx)("div", {
                        className: "container",
                        children: Object(u.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(u.jsx)("div", {
                              className: "col-xl-4 col-lg-5 aos-init a",
                              children: Object(u.jsxs)("div", {
                                className: "content ",
                                style: { boxShadow: "2px 2px 5px black" },
                                children: [
                                  Object(u.jsx)("h3", {
                                    children:
                                      "Why Choose Praedico Global Research?",
                                  }),
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)("big", {
                                    children: Object(u.jsx)("p", {
                                      children:
                                        "Praedico has taken task to provide Basic Financial literacy all across India \u201cFree of Cost \u201c.",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            Object(u.jsx)("div", {
                              className: " col-xl-8 col-lg-7 d-flex",
                              children: Object(u.jsx)("div", {
                                className:
                                  "icon-boxes d-flex flex-column justify-content-center",
                                children: Object(u.jsxs)("div", {
                                  className: "  row",
                                  children: [
                                    Object(u.jsx)("div", {
                                      className:
                                        " con-items  col-xl-4 d-flex align-items-stretch aos-init aos-animate",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "100",
                                      children: Object(u.jsxs)("div", {
                                        className: "icon-box mt-4 mt-xl-0",
                                        style: { boxShadow: "2px 2px 5px" },
                                        children: [
                                          Object(u.jsx)("i", {
                                            className: "bx bx-receipt",
                                          }),
                                          Object(u.jsx)("h4", {
                                            children: "Professional Aid",
                                          }),
                                          Object(u.jsx)("p", {
                                            children:
                                              "We at Praedico Global Research assist you with a professional aid, to make your investments a pleasurable one.",
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(u.jsx)("div", {
                                      className:
                                        "con-items  col-xl-4 d-flex align-items-stretch aos-init aos-animate",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "200",
                                      children: Object(u.jsxs)("div", {
                                        className: "icon-box mt-4 mt-xl-0",
                                        style: { boxShadow: "2px 2px 5px" },
                                        children: [
                                          Object(u.jsx)("i", {
                                            className: "bx bx-cube-alt",
                                          }),
                                          Object(u.jsx)("h4", {
                                            children: "Accuracy",
                                          }),
                                          Object(u.jsx)("p", {
                                            children:
                                              "Our products provide you with an accuracy of more than 90% approximately, maintaining a trust between our clients.",
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(u.jsx)("div", {
                                      className:
                                        "con-items  col-xl-4 d-flex align-items-stretch aos-init aos-animate",
                                      "data-aos": "fade-up",
                                      "data-aos-delay": "300",
                                      children: Object(u.jsxs)("div", {
                                        className: "icon-box mt-4 mt-xl-0",
                                        style: { boxShadow: "2px 2px 5px" },
                                        children: [
                                          Object(u.jsx)("i", {
                                            className: "bx bx-images",
                                          }),
                                          Object(u.jsx)("h4", {
                                            children: "Free of cost",
                                          }),
                                          Object(u.jsx)("p", {
                                            children:
                                              "Praedico assures to provide its\u2019 services at least available prices, reckoning Financial Literacy Mission of praedico Global Research Pvt. Ltd.",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(u.jsx)("div", {
                        className: "plans-bg-div",
                        children: Object(u.jsx)(se, {}),
                      }),
                    ],
                  }),
                  Object(u.jsx)("section", {
                    id: "about",
                    className: "about-b section-bg",
                    children: Object(u.jsx)("div", {
                      className: "container",
                      children: Object(u.jsxs)("div", {
                        className: "row",
                        children: [
                          Object(u.jsx)("div", {
                            className:
                              "col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch aos-init aos-animate",
                            "data-aos": "fade-right",
                            children: Object(u.jsx)("a", {
                              href: "https://www.youtube.com/watch?v=iyNveX-fVOU",
                              className: "venobox play-btn mb-4 vbox-item",
                              "data-vbtype": "video",
                              "data-autoplay": "true",
                            }),
                          }),
                          Object(u.jsxs)("div", {
                            className:
                              "col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5",
                            children: [
                              Object(u.jsx)("h4", {
                                "data-aos": "fade-up",
                                className: "aos-init aos-animate",
                                children: "About us",
                              }),
                              Object(u.jsx)("h3", {
                                "data-aos": "fade-up",
                                className: "aos-init aos-animate",
                                children: "Who we are?",
                              }),
                              Object(u.jsxs)("p", {
                                "data-aos": "fade-up",
                                className: "aos-init aos-animate",
                                children: [
                                  "Neural networks or neural nets were inspired by the architecture of neuron in the human brain and we at Praedico Global Research Pvt. Ltd. are creators of these financial neurones in the field of stock market intelligence. We are India\u2019s first finance neuron developers who are using their specially designed neural networks to accurately predict performances of stock markets around the world. We are a modern generation Fintech company which believes in discovering new research products in the field of finance with the effective use of the Artificial Intelligence. We believe in providing free world class research to people across India with highest accuracy. Our products boast of an accurate prediction of Indian Stock Market and financial products with an accuracy of more than 80%. Average Indian investors spend an average of 40k-50k in form of advisory & research fees which Praedico will be bringing down to Nil in coming years.",
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)("b", {
                                    children: "Our Vision -",
                                  }),
                                  " To be the bellwethers in eradicating financial discrepancy around the world by providing financial access to people who don\u2019t have money to access costly financial products.",
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)("br", {}),
                                  Object(u.jsx)("b", {
                                    children: "Our Mission -",
                                  }),
                                  " To be the leader in financial products development world over. Products so developed should have highest performance and lowest fees in comparison to other financial products in the market.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(u.jsx)("section", {
                    id: "services",
                    className: "services section-bg",
                    children: Object(u.jsxs)("div", {
                      className: "container",
                      children: [
                        Object(u.jsx)("div", {
                          className: "section-title aos-init aos-animate",
                          "data-aos": "fade-up",
                          children: Object(u.jsx)("h2", {
                            children: "Services",
                          }),
                        }),
                        Object(u.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(u.jsx)("div", {
                              className:
                                "col-lg-4 col-md-6 aos-init aos-animate",
                              "data-aos": "fade-up",
                              children: Object(u.jsxs)("div", {
                                className: "icon-box",
                                children: [
                                  Object(u.jsx)("div", {
                                    className: "icon",
                                    children: Object(u.jsx)("i", {
                                      className: "fa fa-desktop",
                                    }),
                                  }),
                                  Object(u.jsx)("h4", {
                                    className: "title",
                                    children: Object(u.jsx)("a", {
                                      href: "",
                                      children: "ANALYSIS",
                                    }),
                                  }),
                                  Object(u.jsx)("p", {
                                    className: "description",
                                    children:
                                      "We assist you with fundamental and technical analysis report of client's portfolio at certain time intervals.",
                                  }),
                                ],
                              }),
                            }),
                            Object(u.jsx)("div", {
                              className:
                                "col-lg-4 col-md-6 aos-init aos-animate",
                              "data-aos": "fade-up",
                              "data-aos-delay": "100",
                              children: Object(u.jsxs)("div", {
                                className: "icon-box",
                                children: [
                                  Object(u.jsx)("div", {
                                    className: "icon",
                                    children: Object(u.jsx)("i", {
                                      className: "fa fa-bar-chart",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                  Object(u.jsx)("h4", {
                                    className: "title",
                                    children: Object(u.jsx)("a", {
                                      href: "",
                                      children: "PERFORMANCES",
                                    }),
                                  }),
                                  Object(u.jsx)("p", {
                                    className: "description",
                                    children:
                                      "We perform with a stock performance at different times with a target price of 6 months, 1 year, 3 years.",
                                  }),
                                ],
                              }),
                            }),
                            Object(u.jsx)("div", {
                              className:
                                "col-lg-4 col-md-6 aos-init aos-animate",
                              "data-aos": "fade-up",
                              "data-aos-delay": "200",
                              children: Object(u.jsxs)("div", {
                                className: "icon-box",
                                children: [
                                  Object(u.jsx)("div", {
                                    className: "icon",
                                    children: Object(u.jsx)("i", {
                                      className: "fa fa-globe",
                                    }),
                                  }),
                                  Object(u.jsx)("h4", {
                                    className: "title",
                                    children: Object(u.jsx)("a", {
                                      href: "",
                                      children: "PORTFOLIO",
                                    }),
                                  }),
                                  Object(u.jsx)("p", {
                                    className: "description",
                                    children:
                                      "We provide you with a service for a specific portfolio, which is specified at all times and in advance to meet your specific needs.",
                                  }),
                                ],
                              }),
                            }),
                            Object(u.jsx)("div", {
                              className:
                                "col-lg-4 col-md-6 aos-init aos-animate",
                              "data-aos": "fade-up",
                              "data-aos-delay": "300",
                              children: Object(u.jsxs)("div", {
                                className: "icon-box",
                                children: [
                                  Object(u.jsx)("div", {
                                    className: "icon",
                                    children: Object(u.jsx)("i", {
                                      className: "fa fa-picture-o",
                                    }),
                                  }),
                                  Object(u.jsx)("h4", {
                                    className: "title",
                                    children: Object(u.jsx)("a", {
                                      href: "",
                                      children: "SERVICING",
                                    }),
                                  }),
                                  Object(u.jsx)("p", {
                                    className: "description",
                                    children:
                                      "Classroom Special Workshop with Cash and Options Adventure.",
                                  }),
                                ],
                              }),
                            }),
                            Object(u.jsx)("div", {
                              className:
                                "col-lg-4 col-md-6 aos-init aos-animate",
                              "data-aos": "fade-up",
                              "data-aos-delay": "400",
                              children: Object(u.jsxs)("div", {
                                className: "icon-box",
                                children: [
                                  Object(u.jsx)("div", {
                                    className: "icon",
                                    children: Object(u.jsx)("i", {
                                      className: "fa fa-tasks",
                                    }),
                                  }),
                                  Object(u.jsx)("h4", {
                                    className: "title",
                                    children: Object(u.jsx)("a", {
                                      href: "",
                                      children:
                                        "Praedico Stock Trading Simulator",
                                    }),
                                  }),
                                  Object(u.jsx)("p", {
                                    className: "description",
                                    children:
                                      "A simulator platform, designed for those who  keens to learn in   Stock trading but fears of  losing money.",
                                  }),
                                ],
                              }),
                            }),
                            Object(u.jsx)("div", {
                              className:
                                "col-lg-4 col-md-6 aos-init aos-animate",
                              "data-aos": "fade-up",
                              "data-aos-delay": "500",
                              children: Object(u.jsxs)("div", {
                                className: "icon-box",
                                children: [
                                  Object(u.jsx)("div", {
                                    className: "icon",
                                    children: Object(u.jsx)("i", {
                                      className: "fa fa-calendar",
                                    }),
                                  }),
                                  Object(u.jsx)("h4", {
                                    className: "title",
                                    children: Object(u.jsx)("a", {
                                      href: "",
                                      children: "Praedico Vertual Trading",
                                    }),
                                  }),
                                  Object(u.jsx)("p", {
                                    className: "description",
                                    children:
                                      "A virtual Trading platform where one can master their Stock Market Learning by competing with others in a live environment.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)(Ye, {}),
                ],
              })
            );
          }),
        et = function () {
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(f, {}),
              Object(u.jsx)("h1", { children: "This is Gallery Page" }),
            ],
          });
        },
        tt = function () {
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(f, {}),
              Object(u.jsx)("h1", { children: "This is Career Page" }),
            ],
          });
        },
        at =
          (a(496),
          function () {
            return Object(u.jsxs)(u.Fragment, {
              children: [
                Object(u.jsx)("div", {
                  className: "testimonials",
                  children: Object(u.jsx)("center", {
                    children: Object(u.jsx)("h2", {
                      className: "banner2",
                      children: "Contact Us",
                    }),
                  }),
                }),
                Object(u.jsxs)("div", {
                  className: "sectionss",
                  children: [
                    Object(u.jsx)("div", {
                      className: "card",
                      style: { maxWidth: "68rem", margin: "10px auto" },
                      children: Object(u.jsxs)("div", {
                        className: "card-body",
                        children: [
                          Object(u.jsx)("h5", {
                            className: "card-title",
                            style: { fontSize: "24px" },
                            children: Object(u.jsx)("b", {
                              children: "Head Office",
                            }),
                          }),
                          Object(u.jsx)("hr", {}),
                          Object(u.jsxs)("div", {
                            className: "row",
                            children: [
                              Object(u.jsxs)("div", {
                                className: "col-md-4",
                                children: [
                                  Object(u.jsx)("b", { children: "Address" }),
                                  Object(u.jsxs)("p", {
                                    children: [
                                      "Praedico Global Research.Pvt.Ltd",
                                      Object(u.jsx)("br", {}),
                                      "Udyog Vihar, Phase 4,",
                                      Object(u.jsx)("br", {}),
                                      "Gurgaon-122015",
                                    ],
                                  }),
                                  Object(u.jsxs)("p", {
                                    children: [
                                      "praedicoglobalresearch@gmail.com",
                                      Object(u.jsx)("br", {}),
                                      "service@praedicoglobalresearch.com ",
                                    ],
                                  }),
                                  Object(u.jsx)("p", {
                                    children: "+91 9009054508, +91 9999703728",
                                  }),
                                ],
                              }),
                              Object(u.jsx)("div", {
                                className: "col-md-8",
                                children: Object(u.jsx)("iframe", {
                                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.647593290645!2d77.06657373193845!3d28.49725266953995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196b0d7637b3%3A0xef51ae0ebb2ad385!2sPhase%20IV%2C%20Udyog%20Vihar%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1596003715628!5m2!1sen!2sin",
                                  width: "100%",
                                  height: "300",
                                  frameborder: "0",
                                  scrolling: "no",
                                  marginheight: "0",
                                  marginwidth: "0",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(u.jsx)("section", {
                      className: "sec-02",
                      children: Object(u.jsx)("div", {
                        className: "card",
                        style: { maxWidth: "68rem", margin: "10px auto" },
                        children: Object(u.jsxs)("div", {
                          className: "card-body",
                          children: [
                            Object(u.jsx)("h4", {
                              children: Object(u.jsx)("b", {
                                children: "Data Center",
                              }),
                            }),
                            Object(u.jsx)("hr", {}),
                            Object(u.jsxs)("div", {
                              className: "row",
                              children: [
                                Object(u.jsxs)("div", {
                                  className: "col-md-4",
                                  children: [
                                    Object(u.jsx)("b", { children: "Address" }),
                                    Object(u.jsxs)("p", {
                                      children: [
                                        "Praedico Global Research.Pvt.Ltd",
                                        Object(u.jsx)("br", {}),
                                        "First Floor, Garima Arcade,",
                                        Object(u.jsx)("br", {}),
                                        "Gwalior-474001",
                                      ],
                                    }),
                                    Object(u.jsxs)("p", {
                                      children: [
                                        "praedicoglobalresearch@gmail.com",
                                        Object(u.jsx)("br", {}),
                                        "service@praedicoglobalresearch.com",
                                      ],
                                    }),
                                    Object(u.jsx)("p", {
                                      children:
                                        "+91 9009054508, +91 9999703728",
                                    }),
                                  ],
                                }),
                                Object(u.jsx)("div", {
                                  className: "col-md-8",
                                  children: Object(u.jsx)("iframe", {
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.8382053145033!2d78.16352807468999!3d26.20720267814431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c429171aa4ad%3A0xe18c9818b9f2639!2sGarima%20Arcade%2C%20Nogja%20Rd%2C%20Shinde%20Ki%20Chhawani%2C%20Gwalior%2C%20Madhya%20Pradesh%20474001!5e0!3m2!1sen!2sin!4v1596002123814!5m2!1sen!2sin",
                                    width: "100%",
                                    height: "300",
                                    frameborder: "0",
                                    scrolling: "no",
                                    marginheight: "0",
                                    marginwidth: "0",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(u.jsx)(Ye, {}),
                  ],
                }),
              ],
            });
          }),
        ct = a(11),
        rt = a(12),
        nt = a(18),
        st = a(17),
        it = (function (e) {
          Object(nt.a)(a, e);
          var t = Object(st.a)(a);
          function a(e) {
            var c;
            return (
              Object(ct.a)(this, a),
              ((c = t.call(this, e)).handleInput = function (e) {
                e.preventDefault();
                var t = e.target.name,
                  a = e.target.value;
                c.setState(Object(v.a)({}, t, a));
              }),
              (c.handleForm = function (e) {
                return (
                  e.preventDefault(),
                  "" === c.state.email ||
                  "" === c.state.password ||
                  "" === c.state.confirm_password
                    ? (g.NotificationManager.warning("Cant be Empty"), !1)
                    : c.state.password != c.state.confirm_password
                    ? (g.NotificationManager.error("Password Did not Match"),
                      !1)
                    : void V.a
                        .post(
                          "http://pgrdemo.herokuapp.com/updatePassword",
                          c.state
                        )
                        .then(function (e) {
                          g.NotificationManager.success(e.data.msg);
                        })
                        .catch(function (e) {
                          e.response && 400 === e.response.status
                            ? g.NotificationManager.error(e.response.data.msg)
                            : g.NotificationManager.error(
                                "Something Went Wrong"
                              ),
                            c.setState({ errors: e.response });
                        })
                );
              }),
              (c.state = {
                linkDate: "",
                email: "",
                password: "",
                confirm_password: "",
                errors: {},
              }),
              c
            );
          }
          return (
            Object(rt.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.match.params.slug.split("+++"),
                    t = e[0],
                    a = e[1];
                  console.log(t),
                    console.log(a),
                    this.setState({ email: a, linkDate: t });
                  var c = new Date(t);
                  new Date() - c > 36e5 &&
                    (console.log("yoo"),
                    g.NotificationManager.error(
                      "Link Not Valid link will be valid for 15 min.Please sent the reset link Again"
                    ),
                    this.props.history.push("/login"));
                },
              },
              {
                key: "render",
                value: function () {
                  return Object(u.jsxs)("div", {
                    className: "content",
                    children: [
                      Object(u.jsx)(g.NotificationContainer, {}),
                      Object(u.jsx)("form", {
                        onSubmit: this.handleForm,
                        children: Object(u.jsxs)("div", {
                          className: "row",
                          style: { marginTop: 20 },
                          children: [
                            Object(u.jsx)("div", { className: "col-sm-3" }),
                            Object(u.jsx)("div", {
                              className: "col-sm-6",
                              children: Object(u.jsxs)("div", {
                                className: "card",
                                children: [
                                  Object(u.jsx)("div", {
                                    className: "card-header text-center",
                                    children: "Reset Password",
                                  }),
                                  Object(u.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                      Object(u.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                          Object(u.jsx)("label", {
                                            children: "Password",
                                          }),
                                          Object(u.jsx)("input", {
                                            type: "password",
                                            name: "password",
                                            value: this.state.password,
                                            onChange: this.handleInput,
                                            className: "form-control",
                                          }),
                                        ],
                                      }),
                                      Object(u.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                          Object(u.jsx)("label", {
                                            children: "Confirm Password",
                                          }),
                                          Object(u.jsx)("input", {
                                            type: "password",
                                            name: "confirm_password",
                                            value: this.state.confirm_password,
                                            onChange: this.handleInput,
                                            className: "form-control",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(u.jsx)("div", {
                                    className: "card-footer text-center",
                                    children: Object(u.jsx)("input", {
                                      type: "submit",
                                      value: "Reset",
                                      onClick: this.handleForm,
                                      className: "btn btn-primary",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            Object(u.jsx)("div", { className: "col-sm-3" }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(c.Component),
        ot = Object(l.j)(it),
        lt = a(80),
        dt = (function (e) {
          Object(nt.a)(a, e);
          var t = Object(st.a)(a);
          function a(e) {
            var c;
            return (
              Object(ct.a)(this, a),
              ((c = t.call(this, e)).handleInput = function (e) {
                e.preventDefault();
                e.target.name;
                var t = e.target.value;
                c.setState({ email: t });
              }),
              (c.validateEmail = function (e) {
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  String(e).toLowerCase()
                );
              }),
              (c.handleForm = function (e) {
                if ((e.preventDefault(), "" === c.state.email))
                  return g.NotificationManager.warning("Email is Required"), !1;
                if (!c.validateEmail(c.state.email))
                  return (
                    g.NotificationManager.error("Incorrect Email Format"), !1
                  );
                var t = { email: c.state.email };
                V.a
                  .post("http://pgrdemo.herokuapp.com/reset", t)
                  .then(function (e) {
                    g.NotificationManager.success(
                      "Password Reset link sent to your email .Please check the your email.Link Will be Valid For 30 min"
                    ),
                      c.setState({ email: "" });
                  })
                  .catch(function (e) {
                    e.response && 404 === e.response.status
                      ? g.NotificationManager.error(e.response.data.msg)
                      : g.NotificationManager.error("Something Went Wrong"),
                      c.setState({ errors: e.response });
                  });
              }),
              (c.state = { email: "", errors: {} }),
              (c.handleInput = c.handleInput.bind(Object(lt.a)(c))),
              c
            );
          }
          return (
            Object(rt.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(u.jsx)("div", {
                    children: Object(u.jsxs)("div", {
                      className: "content",
                      children: [
                        Object(u.jsx)(g.NotificationContainer, {}),
                        Object(u.jsx)("form", {
                          onSubmit: this.handleForm,
                          children: Object(u.jsxs)("div", {
                            className: "row",
                            style: { marginTop: 20 },
                            children: [
                              Object(u.jsx)("div", {
                                className: "col-sm-1 col-md-3",
                              }),
                              Object(u.jsx)("div", {
                                className: "col-sm-10 col-md-6",
                                children: Object(u.jsx)("div", {
                                  children: Object(u.jsx)("div", {
                                    children: Object(u.jsx)("div", {
                                      children: Object(u.jsxs)(Oe.a, {
                                        children: [
                                          Object(u.jsx)("div", {
                                            className:
                                              "header pt-3 grey lighten-2",
                                            children: Object(u.jsx)("div", {
                                              className:
                                                "d-flex justify-content-start",
                                              children: Object(u.jsx)("h3", {
                                                className:
                                                  "deep-grey-text mt-3 mb-4 pb-1 mx-5",
                                                children: "Forgot Password?",
                                              }),
                                            }),
                                          }),
                                          Object(u.jsxs)(ve.a, {
                                            className: "mx-2",
                                            children: [
                                              Object(u.jsx)(H.a, {
                                                id: "outlined-full-width",
                                                label: "Email",
                                                style: { margin: 8 },
                                                placeholder: "Enter Email",
                                                value: this.email,
                                                fullWidth: !0,
                                                margin: "normal",
                                                onChange: this.handleInput,
                                                InputLabelProps: { shrink: !0 },
                                                variant: "outlined",
                                              }),
                                              Object(u.jsx)("div", {
                                                className:
                                                  "text-center mb-4 mt-5",
                                                children: Object(u.jsx)(m.a, {
                                                  variant: "contained",
                                                  color: "secondary",
                                                  onClick: this.handleForm,
                                                  className:
                                                    "btn-block z-depth-2",
                                                  children: "Send MAIL",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              Object(u.jsx)("div", {
                                className: "col-sm-1 col-md-3",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(c.Component),
        jt = a(202),
        bt = a.n(jt),
        ht =
          (a(497),
          {
            firstName: "",
            lastName: "",
            email: "",
            mobileno: "",
            password: "",
            confirmPassword: "",
          }),
        gt = function () {
          var e = h(),
            t = Object(c.useState)(!1),
            a = Object(i.a)(t, 2),
            r = a[0],
            n = a[1],
            s = Object(c.useState)(!1),
            o = Object(i.a)(s, 2),
            j = o[0],
            b = o[1],
            O = Object(c.useState)(ht),
            f = Object(i.a)(O, 2),
            w = f[0],
            S = f[1],
            A = Object(x.c)(),
            C = Object(l.g)(),
            I = (function () {
              var e = Object(N.a)(
                k.a.mark(function e(t) {
                  var a, c, r, n, s;
                  return k.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t.preventDefault(),
                              (a = V.a.create({
                                baseURL: "http://pgrdemo.herokuapp.com",
                              })).interceptors.request.use(function (e) {
                                return (
                                  localStorage.getItem("profile") &&
                                    (e.headers.Authorization = "Bearer ".concat(
                                      JSON.parse(
                                        localStorage.getItem("profile")
                                      ).token
                                    )),
                                  e
                                );
                              }),
                              !j)
                            ) {
                              e.next = 19;
                              break;
                            }
                            return (
                              (e.prev = 4), (e.next = 7), a.post("/signup", w)
                            );
                          case 7:
                            (c = e.sent),
                              (r = c.data),
                              g.NotificationManager.success("Success"),
                              setTimeout(function () {
                                A({ type: "AUTH", data: r }), C.push("/");
                              }, 1e3),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(4)),
                              !e.t0.response ||
                              (404 !== e.t0.response.status &&
                                401 !== e.t0.response.status)
                                ? g.NotificationManager.error(
                                    "Something Went Wrong"
                                  )
                                : g.NotificationManager.error(
                                    e.t0.response.data.message
                                  );
                          case 16:
                            e.next = 32;
                            break;
                          case 19:
                            return (
                              (e.prev = 19), (e.next = 22), a.post("/signin", w)
                            );
                          case 22:
                            (n = e.sent),
                              (s = n.data),
                              g.NotificationManager.success("Success"),
                              setTimeout(function () {
                                A({ type: "AUTH", data: s }), C.push("/");
                              }, 1e3),
                              (e.next = 31);
                            break;
                          case 28:
                            (e.prev = 28),
                              (e.t1 = e.catch(19)),
                              !e.t1.response ||
                              (404 !== e.t1.response.status &&
                                401 !== e.t1.response.status)
                                ? g.NotificationManager.error(
                                    "Something Went Wrong"
                                  )
                                : g.NotificationManager.error(
                                    e.t1.response.data.message
                                  );
                          case 31:
                          case 32:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [
                      [4, 13],
                      [19, 28],
                    ]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            P = function (e) {
              S(
                Object(y.a)(
                  Object(y.a)({}, w),
                  {},
                  Object(v.a)({}, e.target.name, e.target.value)
                )
              );
            };
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(g.NotificationContainer, {}),
              Object(u.jsx)("br", {}),
              Object(u.jsx)("div", {
                className: "form",
                children: Object(u.jsx)(R.a, {
                  component: "main",
                  maxWidth: "xs",
                  children: Object(u.jsxs)(D.a, {
                    className: e.paper,
                    elevation: 3,
                    children: [
                      Object(u.jsx)(p.a, {
                        className: e.avatar,
                        children: Object(u.jsx)(bt.a, {}),
                      }),
                      Object(u.jsx)(ee.a, {
                        variant: "h5",
                        children: j ? "Sign Up" : "Sign In",
                      }),
                      Object(u.jsxs)("form", {
                        className: e.form,
                        onSubmit: I,
                        children: [
                          Object(u.jsxs)(B.a, {
                            container: !0,
                            spacing: 2,
                            children: [
                              j &&
                                Object(u.jsxs)(u.Fragment, {
                                  children: [
                                    Object(u.jsx)(X, {
                                      name: "firstName",
                                      label: "First Name",
                                      handleChange: P,
                                      autoFocus: !0,
                                      half: !0,
                                    }),
                                    Object(u.jsx)(X, {
                                      name: "lastName",
                                      label: "Last Name",
                                      handleChange: P,
                                      half: !0,
                                    }),
                                  ],
                                }),
                              Object(u.jsx)(X, {
                                name: "email",
                                label: "Email Address",
                                handleChange: P,
                                type: "email",
                              }),
                              j &&
                                Object(u.jsx)(X, {
                                  name: "mobileno",
                                  label: "Contact Number",
                                  handleChange: P,
                                  type: "text",
                                }),
                              Object(u.jsx)(X, {
                                name: "password",
                                label: "Password",
                                handleChange: P,
                                type: r ? "text" : "password",
                                handleShowPassword: function () {
                                  return n(function (e) {
                                    return !e;
                                  });
                                },
                              }),
                              j &&
                                Object(u.jsx)(X, {
                                  name: "confirmPassword",
                                  label: "Repeat Password",
                                  handleChange: P,
                                  type: "password",
                                }),
                            ],
                          }),
                          Object(u.jsxs)(B.a, {
                            container: !0,
                            spacing: 3,
                            children: [
                              Object(u.jsx)(B.a, {
                                item: !0,
                                xs: 12,
                                children: Object(u.jsx)(m.a, {
                                  type: "submit",
                                  fullWidth: !0,
                                  variant: "contained",
                                  color: "primary",
                                  className: e.submit,
                                  children: j ? "Sign Up" : "Sign In",
                                }),
                              }),
                              j
                                ? Object(u.jsx)(u.Fragment, {})
                                : Object(u.jsx)(B.a, {
                                    container: !0,
                                    children: Object(u.jsx)(B.a, {
                                      item: !0,
                                      md: !0,
                                      className: e.forget,
                                      children: Object(u.jsx)(d.b, {
                                        to: "/forget-password",
                                        className: e.yo,
                                        children: "Forgot Password?",
                                      }),
                                    }),
                                  }),
                              Object(u.jsx)(B.a, {
                                item: !0,
                                xs: 12,
                                children: Object(u.jsx)(B.a, {
                                  container: !0,
                                  justify: "flex-end",
                                  children: Object(u.jsx)(B.a, {
                                    item: !0,
                                    children: Object(u.jsx)(m.a, {
                                      onClick: function () {
                                        b(function (e) {
                                          return !e;
                                        }),
                                          n(!1);
                                      },
                                      children: Object(u.jsx)("span", {
                                        style: {
                                          fontWeight: "bolder",
                                          color: "darkgreen",
                                        },
                                        children: j
                                          ? "Already have an account? Sign In"
                                          : "If not have account, Sign Up",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        pt = a(7),
        mt = a(661),
        xt = a(669),
        ut = a(33),
        Ot = a(253),
        ft = a(252),
        vt = a(135),
        yt = a.n(vt),
        wt = (a(501), a(502), a(281)),
        kt = a.n(wt),
        Nt = a(282),
        St = a.n(Nt),
        At = a(283),
        Ct = a.n(At),
        It = a(209),
        Pt = a.n(It),
        Rt = (function (e) {
          Object(nt.a)(a, e);
          var t = Object(st.a)(a);
          function a(e) {
            var c;
            return (
              Object(ct.a)(this, a),
              ((c = t.call(this, e)).changeStatus = function (e, t) {
                var a = localStorage.getItem("profile");
                V.a
                  .put(
                    "http://pgrdemo.herokuapp.com/changestatus/".concat(e),
                    { status: !t },
                    { headers: { Authorization: a.token } }
                  )
                  .then(function (e) {
                    g.NotificationManager.success(e.data.msg),
                      c.UNSAFE_componentWillMount();
                  })
                  .catch(function (e) {
                    g.NotificationManager.error(e.response.data.msg);
                  });
              }),
              (c.state = { DATA: [], loading: !1, width: 0, height: 0 }),
              c
            );
          }
          return (
            Object(rt.a)(a, [
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  var e = this,
                    t = localStorage.getItem("profile");
                  V.a
                    .get("http://pgrdemo.herokuapp.com/userlist", {
                      headers: { Authorization: t.token },
                    })
                    .then(function (t) {
                      t.data.userlist.sort(),
                        e.setState({ DATA: Object(ut.a)(t.data.userlist) }),
                        e.setState({ loading: !0 });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [
                      {
                        dataField: "_id",
                        text: "Id",
                        hidden: !0,
                        editable: !1,
                      },
                      {
                        dataField: "name",
                        text: "UserName",
                        sort: !0,
                        headerStyle: function (e, t) {
                          return {
                            fontWeight: "bold",
                            background: "#858796",
                            color: "white",
                            whiteSpace: "nowrap",
                            width: "148px",
                            wordWrap: "break-word",
                          };
                        },
                      },
                      {
                        dataField: "email",
                        text: "Email",
                        headerStyle: function (e, t) {
                          return {
                            whiteSpace: "nowrap",
                            width: "194px",
                            wordWrap: "break-word",
                            fontWeight: "bold",
                            background: "#858796",
                            color: "white",
                          };
                        },
                      },
                      {
                        dataField: "mobile",
                        text: "MobileNo",
                        sort: !0,
                        headerStyle: function (e, t) {
                          return {
                            fontWeight: "bold",
                            background: "#858796",
                            color: "white",
                            whiteSpace: "nowrap",
                            width: "138px",
                            wordWrap: "break-word",
                          };
                        },
                      },
                      {
                        dataField: "type",
                        text: "Active?",
                        headerStyle: function (e, t) {
                          return {
                            fontWeight: "bold",
                            background: "#858796",
                            color: "white",
                          };
                        },
                        style: { width: "70px", textAlign: "center" },
                        editable: !1,
                        formatter: function (t, a) {
                          return Object(u.jsxs)("div", {
                            className: "banUserDiv",
                            children: [
                              Object(u.jsx)("input", {
                                type: "checkbox",
                                style: { display: "none" },
                                id: a._id,
                                readOnly: !0,
                                checked: a.status,
                                onClick: function () {
                                  e.dialog.show({
                                    title: "Sure?",
                                    body: "Are you sure Want to change Status?",
                                    actions: [
                                      yt.a.CancelAction(),
                                      yt.a.OKAction(function () {
                                        e.changeStatus(a._id, a.status);
                                      }),
                                    ],
                                    bsSize: "small",
                                    onHide: function (e) {
                                      e.hide(),
                                        console.log(
                                          "closed by clicking background."
                                        );
                                    },
                                  });
                                },
                              }),
                              Object(u.jsx)("label", { htmlFor: a._id }),
                            ],
                          });
                        },
                      },
                    ],
                    a = [{ dataField: "name", order: "asc" }],
                    c = {
                      sizePerPage: 4,
                      paginationSize: 4,
                      pageStartIndex: 0,
                      firstPageText: "First",
                      prePageText: "Back",
                      nextPageText: "Next",
                      lastPageText: "Last",
                      nextPageTitle: "First page",
                      prePageTitle: "Pre page",
                      firstPageTitle: "Next page",
                      lastPageTitle: "Last page",
                      disablePageTitle: !0,
                      sizePerPageList: [
                        { text: "4", value: 4 },
                        { text: "8", value: 8 },
                        { text: "12", value: 12 },
                      ],
                    },
                    r = function (e, t) {
                      var a = {};
                      return (
                        e.delete || e.status
                          ? (e.delete && !e.status) ||
                            ((a.backgroundColor = "rgb(45, 214, 96)"),
                            (a.color = "rgb(24, 43, 30)"))
                          : ((a.backgroundColor = "#ff3333"),
                            (a.color = "white")),
                        (a.fontWeight = "bold"),
                        a
                      );
                    },
                    n = It.Search.SearchBar;
                  return Object(u.jsxs)(u.Fragment, {
                    children: [
                      Object(u.jsx)(g.NotificationContainer, {}),
                      Object(u.jsx)(R.a, {
                        style: { width: "100%", background: "#ecf0f1" },
                        children: Object(u.jsxs)("div", {
                          className: "mt-3",
                          children: [
                            this.state.loading
                              ? Object(u.jsx)("div", {})
                              : Object(u.jsx)("div", {
                                  style: {
                                    display: "flex",
                                    width: "80%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    marginTop: "169px",
                                  },
                                  children: Object(u.jsx)(L.a, {
                                    style: { width: "60px", height: "60px" },
                                  }),
                                }),
                            Object(u.jsx)(Ot.a, {
                              defaultActiveKey: "view",
                              id: "uncontrolled-tab-example",
                              className: "p-0 m-0",
                              children: Object(u.jsx)(ft.a, {
                                eventKey: "view",
                                title: "View",
                                children: Object(u.jsx)(Pt.a, {
                                  keyField: "_id",
                                  data: this.state.DATA,
                                  columns: t,
                                  search: !0,
                                  hover: !0,
                                  children: function (e) {
                                    return Object(u.jsxs)("div", {
                                      children: [
                                        Object(u.jsx)(
                                          n,
                                          Object(y.a)(
                                            Object(y.a)({}, e.searchProps),
                                            {},
                                            {
                                              className: "custome-search-field",
                                              style: {
                                                color: "red",
                                                width: "100%",
                                                float: "right",
                                                marginLeft: "30px",
                                                border: "2px solid pink",
                                              },
                                              delay: 1e3,
                                              placeholder: "Search!",
                                            }
                                          )
                                        ),
                                        Object(u.jsx)(
                                          kt.a,
                                          Object(y.a)(
                                            Object(y.a)({}, e.baseProps),
                                            {},
                                            {
                                              bootstrap4: !0,
                                              filter: Ct()(),
                                              wrapperClasses:
                                                "table-responsiveeee",
                                              defaultSorted: a,
                                              pagination: St()(c),
                                              hover: !0,
                                              rowStyle: r,
                                            }
                                          )
                                        ),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                            Object(u.jsx)(yt.a, {
                              ref: function (t) {
                                e.dialog = t;
                              },
                            }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(c.Component),
        Tt = a(658),
        Lt = a(674),
        Ft = a(291),
        Dt = a.n(Ft),
        Bt = a(659),
        Ht = a(286),
        Et = a.n(Ht),
        Jt = a(284),
        Mt = a.n(Jt),
        Wt = a(285),
        Gt = a.n(Wt),
        zt = a(290),
        Xt = a.n(zt),
        Ut = a(287),
        Vt = a.n(Ut),
        qt = a(31),
        Zt = "http://pgrdemo.herokuapp.com/",
        Qt = (function () {
          var e = Object(N.a)(
            k.a.mark(function e(t) {
              var a, c, r;
              return k.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (a = Zt + t),
                          console.log(a),
                          (e.next = 5),
                          fetch(a)
                        );
                      case 5:
                        return (c = e.sent), (e.next = 8), c.json();
                      case 8:
                        return (
                          (r = e.sent), console.log(r), e.abrupt("return", r)
                        );
                      case 13:
                        return (
                          (e.prev = 13),
                          (e.t0 = e.catch(0)),
                          console.log("No data return...Devansh"),
                          e.abrupt("return", null)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 13]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Kt = (function () {
          var e = Object(N.a)(
            k.a.mark(function e(t) {
              var a, c, r;
              return k.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (a = Zt + t),
                          console.log(a),
                          (e.next = 5),
                          fetch(a)
                        );
                      case 5:
                        return (c = e.sent), (e.next = 8), c.json();
                      case 8:
                        return (
                          (r = e.sent), console.log(r), e.abrupt("return", r)
                        );
                      case 13:
                        return (
                          (e.prev = 13),
                          (e.t0 = e.catch(0)),
                          console.log("No data return...Devansh"),
                          e.abrupt("return", null)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 13]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Yt = (function () {
          var e = Object(N.a)(
            k.a.mark(function e(t) {
              var a, c, r;
              return k.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (a = Zt + t),
                          console.log(a),
                          (e.next = 5),
                          fetch(a)
                        );
                      case 5:
                        return (c = e.sent), (e.next = 8), c.json();
                      case 8:
                        return (
                          (r = e.sent), console.log(r), e.abrupt("return", r)
                        );
                      case 13:
                        return (
                          (e.prev = 13),
                          (e.t0 = e.catch(0)),
                          console.log("No data return...Devansh"),
                          e.abrupt("return", null)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 13]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        _t = (function () {
          var e = Object(N.a)(
            k.a.mark(function e(t) {
              var a, c, r;
              return k.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (a = Zt + t),
                          console.log(a),
                          (e.next = 5),
                          fetch(a)
                        );
                      case 5:
                        return (c = e.sent), (e.next = 8), c.json();
                      case 8:
                        return (
                          (r = e.sent), console.log(r), e.abrupt("return", r)
                        );
                      case 13:
                        return (
                          (e.prev = 13),
                          (e.t0 = e.catch(0)),
                          console.log("No data return...Devansh"),
                          e.abrupt("return", null)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 13]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        $t = (function () {
          var e = Object(N.a)(
            k.a.mark(function e(t, a) {
              var c, r, n;
              return k.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (c = Zt + t),
                          console.log(a),
                          (e.next = 5),
                          qt.post(c, { id: a })
                        );
                      case 5:
                        return (
                          (r = e.sent),
                          (n = r.data.RESULT),
                          console.log("Node Ser wala ".concat(n)),
                          e.abrupt("return", n)
                        );
                      case 11:
                        return (
                          (e.prev = 11),
                          (e.t0 = e.catch(0)),
                          e.abrupt("return", null)
                        );
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 11]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        ea = a(646),
        ta = a(673),
        aa = Object(j.a)(function (e) {
          return {
            table: {
              marginTop: e.spacing(3),
              "& thead th": {
                fontWeight: "600",
                color: "#ecf0f1",
                backgroundColor: "#2c3e50",
              },
              "& tbody td": { fontWeight: "300" },
              "& tbody tr:hover": {
                backgroundColor: "#fffbf2",
                cursor: "pointer",
              },
            },
          };
        });
      function ca(e, t, a) {
        var r = aa(),
          n = [5, 10, 25],
          s = Object(c.useState)(0),
          o = Object(i.a)(s, 2),
          l = o[0],
          d = o[1],
          j = Object(c.useState)(n[l]),
          b = Object(i.a)(j, 2),
          h = b[0],
          g = b[1],
          p = Object(c.useState)(),
          m = Object(i.a)(p, 2),
          x = m[0],
          O = m[1],
          f = Object(c.useState)(),
          v = Object(i.a)(f, 2),
          y = v[0],
          w = v[1],
          k = function (e, t) {
            d(t);
          },
          N = function (e) {
            g(parseInt(e.target.value, 10)), d(0);
          };
        function S(e, t, a) {
          return t[a] < e[a] ? -1 : t[a] > e[a] ? 1 : 0;
        }
        return {
          TblContainer: function (e) {
            return Object(u.jsx)(A.a, {
              className: r.table,
              children: e.children,
            });
          },
          TblHead: function (e) {
            return Object(u.jsx)(T.a, {
              children: Object(u.jsx)(F.a, {
                children: t.map(function (e) {
                  return Object(u.jsx)(
                    I.a,
                    {
                      sortDirection: y === e.id && x,
                      children: e.disableSorting
                        ? e.label
                        : Object(u.jsx)(ta.a, {
                            active: y === e.id,
                            direction: y === e.id ? x : "asc",
                            onClick: function () {
                              var t;
                              (t = e.id),
                                O(y === t && "asc" === x ? "desc" : "asc"),
                                w(t);
                            },
                            children: e.label,
                          }),
                    },
                    e.id
                  );
                }),
              }),
            });
          },
          TblPagination: function () {
            return Object(u.jsx)(q.a, {
              component: "div",
              page: l,
              rowsPerPageOptions: n,
              rowsPerPage: h,
              count: e.length,
              onChangePage: k,
              onChangeRowsPerPage: N,
            });
          },
          recordsAfterPagingAndSorting: function () {
            return (function (e, t) {
              var a = e.map(function (e, t) {
                return [e, t];
              });
              return (
                a.sort(function (e, a) {
                  var c = t(e[0], a[0]);
                  return 0 !== c ? c : e[1] - a[1];
                }),
                a.map(function (e) {
                  return e[0];
                })
              );
            })(
              a.fn(e),
              (function (e, t) {
                return "desc" === e
                  ? function (e, a) {
                      return S(e, a, t);
                    }
                  : function (e, a) {
                      return -S(e, a, t);
                    };
              })(x, y)
            ).slice(l * h, (l + 1) * h);
          },
        };
      }
      var ra = a(657),
        na = Object(j.a)(function (e) {
          return {
            pageContent: { margin: e.spacing(5), padding: e.spacing(3) },
            searchInput: { width: "75%" },
          };
        }),
        sa = [
          { id: "name", label: "Name" },
          { id: "email", label: "Email Address" },
          { id: "date", label: "Date" },
          { id: "time", label: "Time" },
        ],
        ia = function () {
          var e = na(),
            t = r.a.useState([]),
            a = Object(i.a)(t, 2),
            n = a[0],
            s = a[1],
            o = (function () {
              var e = Object(N.a)(
                k.a.mark(function e() {
                  var t;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Qt("userloginlist");
                        case 2:
                          (t = e.sent), s(t), console.log(t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          r.a.useEffect(function () {
            o();
          }, []);
          var l = Object(c.useState)({
              fn: function (e) {
                return e;
              },
            }),
            d = Object(i.a)(l, 2),
            j = d[0],
            b = d[1],
            h = ca(n, sa, j),
            g = h.TblContainer,
            p = h.TblHead,
            m = h.TblPagination,
            x = h.recordsAfterPagingAndSorting;
          return (
            console.log(n),
            Object(u.jsxs)(u.Fragment, {
              children: [
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("center", {
                    children: Object(u.jsx)("h1", {
                      children: "User Login List",
                    }),
                  }),
                }),
                Object(u.jsx)("div", {
                  children: Object(u.jsxs)(D.a, {
                    className: e.pageContent,
                    children: [
                      Object(u.jsx)(ea.a, {
                        children: Object(u.jsx)(H.a, {
                          label: "Search Users",
                          className: e.searchInput,
                          InputProps: {
                            startAdornment: Object(u.jsx)(E.a, {
                              position: "start",
                              children: Object(u.jsx)(ra.a, {}),
                            }),
                          },
                          onChange: function (e) {
                            var t = e.target;
                            b({
                              fn: function (e) {
                                return "" == t.value
                                  ? e
                                  : e.filter(function (e) {
                                      return e.name
                                        .toLowerCase()
                                        .includes(t.value);
                                    });
                              },
                            });
                          },
                        }),
                      }),
                      Object(u.jsxs)(g, {
                        children: [
                          Object(u.jsx)(p, {}),
                          Object(u.jsx)(C.a, {
                            children: x().map(function (e) {
                              return Object(u.jsxs)(
                                F.a,
                                {
                                  children: [
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.name,
                                      }),
                                    }),
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.emailid,
                                      }),
                                    }),
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.date,
                                      }),
                                    }),
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.time,
                                      }),
                                    }),
                                  ],
                                },
                                e.id
                              );
                            }),
                          }),
                        ],
                      }),
                      Object(u.jsx)(m, {}),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        oa = Object(j.a)(function (e) {
          return {
            pageContent: { margin: e.spacing(5), padding: e.spacing(3) },
            searchInput: { width: "75%" },
          };
        }),
        la = [
          { id: "name", label: "Name" },
          { id: "email", label: "Email Address" },
          { id: "last_scene", label: "Last Login" },
          { id: "count", label: "Count" },
        ],
        da = function () {
          var e = oa(),
            t = r.a.useState([]),
            a = Object(i.a)(t, 2),
            n = a[0],
            s = a[1],
            o = (function () {
              var e = Object(N.a)(
                k.a.mark(function e() {
                  var t;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Kt("userloginlist2");
                        case 2:
                          (t = e.sent), s(t), console.log(t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          r.a.useEffect(function () {
            o();
          }, []);
          var l = Object(c.useState)({
              fn: function (e) {
                return e;
              },
            }),
            d = Object(i.a)(l, 2),
            j = d[0],
            b = d[1],
            h = ca(n, la, j),
            g = h.TblContainer,
            p = h.TblHead,
            m = h.TblPagination,
            x = h.recordsAfterPagingAndSorting;
          return (
            console.log(n),
            Object(u.jsxs)(u.Fragment, {
              children: [
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("center", {
                    children: Object(u.jsx)("h1", {
                      children: "User Login List (By Count)",
                    }),
                  }),
                }),
                Object(u.jsx)("div", {
                  children: Object(u.jsxs)(D.a, {
                    className: e.pageContent,
                    children: [
                      Object(u.jsx)(ea.a, {
                        children: Object(u.jsx)(H.a, {
                          label: "Search Users",
                          className: e.searchInput,
                          InputProps: {
                            startAdornment: Object(u.jsx)(E.a, {
                              position: "start",
                              children: Object(u.jsx)(ra.a, {}),
                            }),
                          },
                          onChange: function (e) {
                            var t = e.target;
                            b({
                              fn: function (e) {
                                return "" == t.value
                                  ? e
                                  : e.filter(function (e) {
                                      return e.name
                                        .toLowerCase()
                                        .includes(t.value);
                                    });
                              },
                            });
                          },
                        }),
                      }),
                      Object(u.jsxs)(g, {
                        children: [
                          Object(u.jsx)(p, {}),
                          Object(u.jsx)(C.a, {
                            children: x().map(function (e) {
                              return Object(u.jsxs)(
                                F.a,
                                {
                                  children: [
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.name,
                                      }),
                                    }),
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.emailid,
                                      }),
                                    }),
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.Last_Seen,
                                      }),
                                    }),
                                    Object(u.jsx)(I.a, {
                                      children: Object(u.jsx)("b", {
                                        children: e.count,
                                      }),
                                    }),
                                  ],
                                },
                                e.id
                              );
                            }),
                          }),
                        ],
                      }),
                      Object(u.jsx)(m, {}),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        ja = a(203),
        ba = a.n(ja),
        ha = a(171),
        ga = a.n(ha),
        pa = Object(j.a)(function (e) {
          return {
            pageContent: { margin: e.spacing(5), padding: e.spacing(3) },
            searchInput: { width: "75%" },
          };
        }),
        ma = [
          { id: "name", label: "Name" },
          { id: "email", label: "Email Address" },
          { id: "mobile", label: "Mobile No." },
          { id: "payment", label: "Payment Status" },
        ],
        xa = function () {
          var e = pa(),
            t = r.a.useState([]),
            a = Object(i.a)(t, 2),
            n = a[0],
            s = a[1],
            o = (function () {
              var e = Object(N.a)(
                k.a.mark(function e() {
                  var t;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), _t("userlistforpayment2");
                        case 2:
                          (t = e.sent), s(t), console.log(t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          r.a.useEffect(function () {
            o();
          }, []);
          var l = Object(c.useState)({
              fn: function (e) {
                return e;
              },
            }),
            d = Object(i.a)(l, 2),
            j = d[0],
            b = d[1],
            h = ca(n, ma, j),
            g = h.TblContainer,
            p = h.TblHead,
            x = h.TblPagination,
            O = h.recordsAfterPagingAndSorting,
            f = (function () {
              var e = Object(N.a)(
                k.a.mark(function e(t) {
                  var a;
                  return k.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log(t),
                            (a = t),
                            (e.next = 4),
                            $t("updatepaymentstatus", a)
                          );
                        case 4:
                          e.sent, o();
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (
            console.log(n),
            Object(u.jsx)(u.Fragment, {
              children: Object(u.jsx)("div", {
                children: Object(u.jsxs)(D.a, {
                  className: e.pageContent,
                  children: [
                    Object(u.jsx)(ea.a, {
                      children: Object(u.jsx)(H.a, {
                        label: "Search Users",
                        className: e.searchInput,
                        InputProps: {
                          startAdornment: Object(u.jsx)(E.a, {
                            position: "start",
                            children: Object(u.jsx)(ra.a, {}),
                          }),
                        },
                        onChange: function (e) {
                          var t = e.target;
                          b({
                            fn: function (e) {
                              return "" == t.value
                                ? e
                                : e.filter(function (e) {
                                    return e.name
                                      .toLowerCase()
                                      .includes(t.value);
                                  });
                            },
                          });
                        },
                      }),
                    }),
                    Object(u.jsxs)(g, {
                      children: [
                        Object(u.jsx)(p, {}),
                        Object(u.jsx)(C.a, {
                          children: O().map(function (e) {
                            return Object(u.jsxs)(
                              F.a,
                              {
                                children: [
                                  Object(u.jsx)(I.a, {
                                    children: Object(u.jsx)("b", {
                                      children: e.name,
                                    }),
                                  }),
                                  Object(u.jsx)(I.a, {
                                    children: Object(u.jsx)("b", {
                                      children: e.email,
                                    }),
                                  }),
                                  Object(u.jsx)(I.a, {
                                    children: Object(u.jsx)("b", {
                                      children: e.mobile,
                                    }),
                                  }),
                                  Object(u.jsx)(I.a, {
                                    children: Object(u.jsx)("b", {
                                      children: Object(u.jsx)(m.a, {
                                        variant: "contained",
                                        color: "primary",
                                        endIcon: Object(u.jsx)(ga.a, {}),
                                        onClick: function () {
                                          return f(e.email);
                                        },
                                        children: "Paid",
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              e.id
                            );
                          }),
                        }),
                      ],
                    }),
                    Object(u.jsx)(x, {}),
                  ],
                }),
              }),
            })
          );
        },
        ua = Object(j.a)(function (e) {
          return {
            pageContent: { margin: e.spacing(5), padding: e.spacing(3) },
            searchInput: { width: "75%" },
          };
        }),
        Oa = [
          { id: "name", label: "Name" },
          { id: "email", label: "Email Address" },
          { id: "mobile", label: "Mobile No." },
          { id: "payment", label: "Payment Status" },
          { id: "change", label: "Change Status" },
        ],
        fa = function () {
          var e = (function () {
            var e = Object(N.a)(
              k.a.mark(function e() {
                var t;
                return k.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Yt("userlistforpayment");
                      case 2:
                        (t = e.sent), p(t), console.log(t);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          r.a.useEffect(function () {
            e();
          }, []);
          var t = r.a.useState({ checkedA: !1, checkedB: !0 }),
            a = Object(i.a)(t, 2),
            n = a[0],
            s = (a[1], r.a.useState(!0)),
            o = Object(i.a)(s, 2),
            l = o[0],
            d = o[1];
          console.log(l);
          var j = ua(),
            b = r.a.useState([]),
            h = Object(i.a)(b, 2),
            g = h[0],
            p = h[1],
            x = Object(c.useState)({
              fn: function (e) {
                return e;
              },
            }),
            O = Object(i.a)(x, 2),
            f = O[0],
            v = O[1],
            y = ca(g, Oa, f),
            w = y.TblContainer,
            S = y.TblHead,
            A = y.TblPagination,
            P = y.recordsAfterPagingAndSorting,
            R = (function () {
              var t = Object(N.a)(
                k.a.mark(function t(a) {
                  var c;
                  return k.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.log(a),
                            (c = a),
                            (t.next = 4),
                            $t("updatepaymentstatus2", c)
                          );
                        case 4:
                          t.sent, e();
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return (
            console.log(g),
            Object(u.jsxs)(u.Fragment, {
              children: [
                Object(u.jsx)("div", {
                  children: Object(u.jsx)("center", {
                    children: Object(u.jsx)("h1", {
                      children: "User Payment List",
                    }),
                  }),
                }),
                Object(u.jsx)("center", {
                  children: Object(u.jsx)(ee.a, {
                    component: "div",
                    children: Object(u.jsx)("center", {
                      children: Object(u.jsxs)(B.a, {
                        component: "label",
                        container: !0,
                        alignItems: "center",
                        spacing: 1,
                        children: [
                          Object(u.jsx)(B.a, {
                            item: !0,
                            children: Object(u.jsx)("b", {
                              children: "Subscribed Users",
                            }),
                          }),
                          Object(u.jsx)(B.a, {
                            item: !0,
                            children: Object(u.jsx)(Re.a, {
                              checked: l ? n.checkedA : n.checkedB,
                              value: l,
                              onChange: function (t) {
                                e(), d(0 == l);
                              },
                            }),
                          }),
                          Object(u.jsx)(B.a, {
                            item: !0,
                            children: Object(u.jsx)("b", {
                              children: "Non Subscriber Users",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                l
                  ? Object(u.jsx)(u.Fragment, {
                      children: Object(u.jsx)("div", {
                        children: Object(u.jsxs)(D.a, {
                          className: j.pageContent,
                          children: [
                            Object(u.jsx)(ea.a, {
                              children: Object(u.jsx)(H.a, {
                                label: "Search Users",
                                className: j.searchInput,
                                InputProps: {
                                  startAdornment: Object(u.jsx)(E.a, {
                                    position: "start",
                                    children: Object(u.jsx)(ra.a, {}),
                                  }),
                                },
                                onChange: function (e) {
                                  var t = e.target;
                                  v({
                                    fn: function (e) {
                                      return "" == t.value
                                        ? e
                                        : e.filter(function (e) {
                                            return e.name
                                              .toLowerCase()
                                              .includes(t.value);
                                          });
                                    },
                                  });
                                },
                              }),
                            }),
                            Object(u.jsxs)(w, {
                              children: [
                                Object(u.jsx)(S, {}),
                                Object(u.jsx)(C.a, {
                                  children: P().map(function (e) {
                                    return Object(u.jsxs)(
                                      F.a,
                                      {
                                        children: [
                                          Object(u.jsx)(I.a, {
                                            children: Object(u.jsx)("b", {
                                              children: e.name,
                                            }),
                                          }),
                                          Object(u.jsx)(I.a, {
                                            children: Object(u.jsx)("b", {
                                              children: e.email,
                                            }),
                                          }),
                                          Object(u.jsx)(I.a, {
                                            children: Object(u.jsx)("b", {
                                              children: e.mobile,
                                            }),
                                          }),
                                          Object(u.jsx)(I.a, {
                                            children: Object(u.jsxs)("b", {
                                              children: [
                                                Object(u.jsx)(ba.a, {
                                                  style: { color: "#2ecc71" },
                                                }),
                                                e.adminpayment
                                                  ? Object(u.jsx)(u.Fragment, {
                                                      children: "Done by Admin",
                                                    })
                                                  : Object(u.jsx)(u.Fragment, {
                                                      children: "Done by User",
                                                    }),
                                              ],
                                            }),
                                          }),
                                          Object(u.jsx)(I.a, {
                                            children: Object(u.jsx)("b", {
                                              children: Object(u.jsx)(m.a, {
                                                variant: "contained",
                                                color: "secondary",
                                                endIcon: Object(u.jsx)(
                                                  ga.a,
                                                  {}
                                                ),
                                                onClick: function () {
                                                  return R(e.email);
                                                },
                                                children: "Unpay",
                                              }),
                                            }),
                                          }),
                                        ],
                                      },
                                      e.id
                                    );
                                  }),
                                }),
                              ],
                            }),
                            Object(u.jsx)(A, {}),
                          ],
                        }),
                      }),
                    })
                  : Object(u.jsx)(u.Fragment, {
                      children: Object(u.jsx)(xa, {}),
                    }),
              ],
            })
          );
        },
        va = a(288),
        ya = a.n(va),
        wa = a(289),
        ka = a.n(wa),
        Na = ["labelText", "labelIcon", "labelInfo", "color", "bgColor"],
        Sa = Object(j.a)(function (e) {
          return {
            root: {
              color: e.palette.text.secondary,
              "&:hover > $content": { backgroundColor: e.palette.action.hover },
              "&:focus > $content, &$selected > $content": {
                backgroundColor: "var(--tree-view-bg-color, ".concat(
                  e.palette.grey[400],
                  ")"
                ),
                color: "var(--tree-view-color)",
              },
              "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":
                { backgroundColor: "transparent" },
            },
            content: {
              color: e.palette.text.secondary,
              borderTopRightRadius: e.spacing(2),
              borderBottomRightRadius: e.spacing(2),
              paddingRight: e.spacing(1),
              fontWeight: e.typography.fontWeightMedium,
              "$expanded > &": { fontWeight: e.typography.fontWeightRegular },
            },
            group: {
              marginLeft: 0,
              "& $content": { paddingLeft: e.spacing(2) },
            },
            expanded: {},
            selected: {},
            label: { fontWeight: "inherit", color: "inherit" },
            labelRoot: {
              display: "flex",
              alignItems: "center",
              padding: e.spacing(1, 0),
            },
            labelIcon: { marginRight: e.spacing(3), fontSize: "29px" },
            labelText: { fontWeight: "inherit", flexGrow: 1 },
          };
        });
      function Aa(e) {
        var t = Sa(),
          a = e.labelText,
          c = e.labelIcon,
          r = e.labelInfo,
          n = e.color,
          s = e.bgColor,
          i = Object(xe.a)(e, Na);
        return Object(u.jsx)(
          Lt.a,
          Object(y.a)(
            {
              label: Object(u.jsxs)("div", {
                className: t.labelRoot,
                children: [
                  Object(u.jsx)(c, {
                    color: "inherit",
                    className: t.labelIcon,
                  }),
                  Object(u.jsx)(ee.a, {
                    variant: "body2",
                    className: t.labelText,
                    children: a,
                  }),
                  Object(u.jsx)(ee.a, {
                    variant: "caption",
                    color: "inherit",
                    children: r,
                  }),
                ],
              }),
              style: { "--tree-view-color": n, "--tree-view-bg-color": s },
              classes: {
                root: t.root,
                content: t.content,
                expanded: t.expanded,
                selected: t.selected,
                group: t.group,
                label: t.label,
              },
            },
            i
          )
        );
      }
      var Ca = Object(j.a)({
        root: { height: 264, flexGrow: 1, maxWidth: 400 },
      });
      function Ia(e) {
        var t = Ca(),
          a = Object(c.useState)(0),
          r = Object(i.a)(a, 2),
          n = r[0],
          s = r[1],
          o = function (t) {
            e.handleView(t), n < 450 ? e.handleDrawerClose() : e.handleDrawer();
          },
          l = function () {
            s(window.innerWidth);
          };
        return (
          Object(c.useLayoutEffect)(function () {
            return (
              window.addEventListener("resize", l),
              l(),
              function () {
                return window.removeEventListener("resize", l);
              }
            );
          }, []),
          Object(u.jsxs)(Tt.a, {
            className: t.root,
            defaultCollapseIcon: Object(u.jsx)(Mt.a, {}),
            defaultExpandIcon: Object(u.jsx)(Gt.a, {}),
            defaultEndIcon: Object(u.jsx)("div", { style: { width: 24 } }),
            defaultSelected: ["6"],
            children: [
              Object(u.jsx)(Aa, {
                nodeId: "6",
                labelText: "Users",
                labelIcon: Et.a,
                onClick: function () {
                  return o(Object(u.jsx)(Rt, {}));
                },
                color: "#e3742f",
                bgColor: "#fcefe3",
              }),
              Object(u.jsx)(Bt.a, {}),
              Object(u.jsx)(Aa, {
                nodeId: "8",
                labelText: "Login User List",
                labelIcon: Vt.a,
                onClick: function () {
                  return o(Object(u.jsx)(ia, {}));
                },
                color: "#e3742f",
                bgColor: "#fcefe3",
              }),
              Object(u.jsx)(Bt.a, {}),
              Object(u.jsx)(Aa, {
                nodeId: "9",
                labelText: "Login User List by count",
                labelIcon: ya.a,
                onClick: function () {
                  return o(Object(u.jsx)(da, {}));
                },
                color: "#e3742f",
                bgColor: "#fcefe3",
              }),
              Object(u.jsx)(Bt.a, {}),
              Object(u.jsx)(Aa, {
                nodeId: "10",
                labelText: "Payment User List",
                labelIcon: ka.a,
                onClick: function () {
                  return o(Object(u.jsx)(fa, {}));
                },
                color: "#e3742f",
                bgColor: "#fcefe3",
              }),
              Object(u.jsx)(Bt.a, {}),
              Object(u.jsx)(Aa, {
                nodeId: "7",
                labelText: "Home",
                labelIcon: Xt.a,
                onClick: function () {
                  return e.history.push("/");
                },
                color: "#e3742f",
                bgColor: "#1a73e8",
              }),
              Object(u.jsx)(Bt.a, {}),
              Object(u.jsx)(Bt.a, {}),
              Object(u.jsx)(Aa, {
                nodeId: "50",
                labelText: "Logout",
                labelIcon: Dt.a,
                onClick: function () {
                  return o(50);
                },
                color: "#1a73e8",
                bgColor: "#e8f0fe",
              }),
            ],
          })
        );
      }
      var Pa = a(292),
        Ra = a(293),
        Ta = a.n(Ra),
        La = a(660),
        Fa = a(294),
        Da = a(295),
        Ba = a.n(Da),
        Ha = a(297),
        Ea = a.n(Ha),
        Ja = a(296),
        Ma = a.n(Ja),
        Wa = Object(j.a)(function (e) {
          return {
            large: { width: e.spacing(7), height: e.spacing(7) },
            root: {
              display: "flex",
              "& .makeStyles-drawerPaperClose-29": { width: "72px" },
              "& .makeStyles-drawerPaperClose-49": { width: "72px" },
              "& .makeStyles-drawerPaperClose-11": { width: "72px" },
              "& .makeStyles-drawerPaperClose-87": { width: "72px" },
              "& .makeStyles-drawerPaperClose-50": { width: "72px" },
              "& .makeStyles-drawerPaperClose-89": { width: "72px" },
              "& .makeStyles-drawerPaperClose-128": { width: "72px" },
              "& .makeStyles-drawerPaperClose-23": { width: "72px" },
            },
            toolbar: { paddingRight: 24 },
            toolbarIcon: Object(y.a)(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0 8px",
              },
              e.mixins.toolbar
            ),
            appBar: {
              zIndex: e.zIndex.drawer + 1,
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              marginLeft: 240,
              width: "calc(100% - ".concat(240, "px)"),
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            menuButton: { marginRight: 36 },
            menuButtonHidden: { display: "none" },
            title: {
              flexGrow: 1,
              fontFamily: " Verdana, Arial, Helvetica, sans-serif",
            },
            drawerPaper: {
              position: "relative",
              whiteSpace: "nowrap",
              width: 240,
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            drawerPaperClose: Object(v.a)(
              {
                overflowX: "hidden",
                transition: e.transitions.create("width", {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
                width: e.spacing(7),
              },
              e.breakpoints.up("sm"),
              { width: e.spacing(9) }
            ),
            appBarSpacer: e.mixins.toolbar,
            content: { flexGrow: 1, height: "100vh", overflow: "auto" },
            container: {
              paddingTop: e.spacing(4),
              paddingBottom: e.spacing(4),
              "&.makeStyles-container-14": {
                paddingTop: "0px",
                paddingBottom: "0px",
              },
              "&.makeStyles-container-53": {
                paddingTop: "0px",
                paddingBottom: "0px",
              },
            },
            paper: {
              padding: e.spacing(2),
              display: "flex",
              overflow: "auto",
              flexDirection: "column",
            },
            fixedHeight: { height: 240 },
            yo: {
              paddingLeft: "0px",
              paddingRight: "0px",
              paddingTop: "0px",
              marginTop: "20px",
            },
          };
        });
      function Ga(e) {
        var t = Wa(),
          a = Object(c.useState)(null),
          n = Object(i.a)(a, 2),
          s = n[0],
          o = n[1],
          d = Object(c.useState)(Object(u.jsx)(Rt, {})),
          j = Object(i.a)(d, 2),
          b = j[0],
          h = j[1],
          m = r.a.useState(!0),
          O = Object(i.a)(m, 2),
          f = O[0],
          v = O[1],
          y = Object(x.c)(),
          w = Object(l.g)(),
          k =
            (Object(La.a)(Ta()({ maxWidth: 900 })),
            function () {
              v(!1);
            }),
          N = function () {
            window.innerWidth < 900 ? v(!1) : v(!0);
          };
        return (
          Object(c.useEffect)(
            function () {
              return (
                window.addEventListener("resize", N),
                function () {
                  return window.removeEventListener("resize", N);
                }
              );
            },
            [f]
          ),
          Object(c.useEffect)(function () {
            !(function () {
              if (localStorage.getItem("profile")) {
                var e = JSON.parse(localStorage.getItem("profile"));
                o(e.result);
              } else w.replace({ pathname: "/" });
            })(),
              N();
          }, []),
          Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(g.NotificationContainer, {}),
              Object(u.jsxs)("div", {
                className: t.root,
                children: [
                  Object(u.jsx)(mt.a, {}),
                  Object(u.jsx)(Fe.a, {
                    position: "absolute",
                    className: Object(pt.a)(t.appBar, f && t.appBarShift),
                    children: Object(u.jsxs)(ea.a, {
                      className: t.toolbar,
                      children: [
                        Object(u.jsx)(J.a, {
                          edge: "start",
                          color: "inherit",
                          "aria-label": "open drawer",
                          onClick: function () {
                            v(!0);
                          },
                          className: Object(pt.a)(
                            t.menuButton,
                            f && t.menuButtonHidden
                          ),
                          children: Object(u.jsx)(Ba.a, {}),
                        }),
                        Object(u.jsxs)(ee.a, {
                          component: "h1",
                          variant: "h6",
                          color: "inherit",
                          noWrap: !0,
                          className: t.title,
                          children: [
                            "Welcome : \xa0",
                            s ? s.name : Object(u.jsx)(u.Fragment, {}),
                            " \xa0",
                            Object(u.jsx)(Pa.Icon, {
                              width: 27,
                              height: 27,
                              icon: Fa.a,
                            }),
                          ],
                        }),
                        Object(u.jsx)(J.a, {
                          color: "inherit",
                          children: Object(u.jsx)(p.a, {
                            alt: "Admin",
                            src: "https://png.pngtree.com/png-vector/20191122/ourmid/pngtree-beautiful-admin-roles-glyph-vector-icon-png-image_2002847.jpg",
                            className: t.large,
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsxs)(xt.a, {
                    variant: "permanent",
                    classes: {
                      paper: Object(pt.a)(
                        t.drawerPaper,
                        !f && t.drawerPaperClose
                      ),
                    },
                    open: f,
                    children: [
                      Object(u.jsxs)("div", {
                        className: t.toolbarIcon,
                        children: [
                          Object(u.jsxs)("span", {
                            style: {
                              fontWeight: "bold",
                              fontSize: "17px",
                              fontFamily:
                                " Times, Times New Roman, Georgia, serif",
                              padding: "26px 0px 26px 0px",
                            },
                            children: [
                              Object(u.jsx)(Ma.a, {}),
                              "ADMIN Dashboard",
                              " ",
                            ],
                          }),
                          Object(u.jsx)(J.a, {
                            onClick: k,
                            children: Object(u.jsx)(Ea.a, {}),
                          }),
                        ],
                      }),
                      Object(u.jsx)(Bt.a, {}),
                      Object(u.jsx)(Ia, {
                        handleDrawer: function () {
                          v(!0);
                        },
                        handleDrawerClose: k,
                        handleView: function (e) {
                          50 === e
                            ? (localStorage.clear(),
                              g.NotificationManager.success(
                                "Logout Successfull"
                              ),
                              setTimeout(function () {
                                y({ type: "LOGOUT" }), w.push("/");
                              }, 800))
                            : h(e);
                        },
                        history: w,
                      }),
                      Object(u.jsx)(Bt.a, {}),
                    ],
                  }),
                  Object(u.jsxs)("main", {
                    className: t.content,
                    children: [
                      Object(u.jsx)("div", { className: t.appBarSpacer }),
                      Object(u.jsx)(R.a, {
                        maxWidth: "lg",
                        className: t.container,
                        classes: { root: t.yo },
                        children: b,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var za = ["component"],
        Xa = function (e) {
          var t = e.component,
            a = Object(xe.a)(e, za);
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(O, {}),
              Object(u.jsx)(f, {}),
              Object(u.jsx)(
                l.b,
                Object(y.a)(
                  Object(y.a)({}, a),
                  {},
                  {
                    render: function (e) {
                      return Object(u.jsx)(t, Object(y.a)({}, e));
                    },
                  }
                )
              ),
            ],
          });
        },
        Ua = (a(568), ["component"]),
        Va = Object(x.b)(function (e) {
          return { loggedIn: e.loggedIn };
        })(function (e) {
          var t = e.component,
            a = Object(xe.a)(e, Ua);
          return Object(u.jsx)(
            l.b,
            Object(y.a)(
              Object(y.a)({}, a),
              {},
              {
                render: function (e) {
                  return JSON.parse(localStorage.getItem("profile")).result
                    .admin
                    ? Object(u.jsx)(t, {})
                    : Object(u.jsx)(l.a, {
                        to: { pathname: "/", state: { from: e.location } },
                      });
                },
              }
            )
          );
        });
      var qa = function () {
          return Object(u.jsx)(u.Fragment, {
            children: Object(u.jsx)(d.a, {
              children: Object(u.jsxs)(l.d, {
                children: [
                  Object(u.jsx)(l.b, {
                    path: "/change-password/:slug",
                    exact: !0,
                    component: ot,
                  }),
                  Object(u.jsx)(Xa, {
                    path: "/forget-password",
                    exact: !0,
                    component: dt,
                  }),
                  Object(u.jsx)(Xa, { exact: !0, path: "/", component: $e }),
                  Object(u.jsx)(Xa, {
                    exact: !0,
                    path: "/data/:id",
                    component: me,
                  }),
                  Object(u.jsx)(Xa, {
                    exact: !0,
                    path: "/about",
                    component: _e,
                  }),
                  Object(u.jsx)(Xa, {
                    exact: !0,
                    path: "/stock",
                    component: me,
                  }),
                  Object(u.jsx)(Xa, {
                    exact: !0,
                    path: "/gallery",
                    component: et,
                  }),
                  Object(u.jsx)(Xa, {
                    exact: !0,
                    path: "/career",
                    component: tt,
                  }),
                  Object(u.jsx)(Xa, {
                    exact: !0,
                    path: "/contact",
                    component: at,
                  }),
                  Object(u.jsx)(Xa, {
                    exact: !0,
                    path: "/login",
                    component: gt,
                  }),
                  Object(u.jsx)(Va, {
                    path: "/admin",
                    exact: !0,
                    component: Ga,
                  }),
                  Object(u.jsx)(l.a, { to: "/" }),
                ],
              }),
            }),
          });
        },
        Za = a(121),
        Qa = a(298),
        Ka = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { loggedIn: !1, authData: null },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "AUTH":
              return (
                localStorage.setItem(
                  "profile",
                  JSON.stringify(
                    Object(y.a)(
                      {},
                      null === t || void 0 === t ? void 0 : t.data
                    )
                  )
                ),
                Object(y.a)(
                  Object(y.a)({}, e),
                  {},
                  {
                    loggedIn: !0,
                    authData: null === t || void 0 === t ? void 0 : t.data,
                  }
                )
              );
            case "LOGOUT":
              return (
                localStorage.clear(),
                Object(y.a)(
                  Object(y.a)({}, e),
                  {},
                  { loggedIn: !1, authData: null }
                )
              );
            default:
              return e;
          }
        },
        Ya = Object(Za.b)({ auth: Ka }),
        _a = Object(Za.d)(Ya, Object(Za.c)(Object(Za.a)(Qa.a)));
      s.a.render(
        Object(u.jsx)(x.a, { store: _a, children: Object(u.jsx)(qa, {}) }),
        document.getElementById("root")
      );
    },
    68: function (e, t, a) {},
  },
  [[569, 1, 2]],
]);
//# sourceMappingURL=main.50eabb15.chunk.js.map
