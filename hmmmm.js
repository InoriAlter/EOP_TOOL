/*build: 09/09/19 16:41:26*/
var dWin = function() {
    return {
     a8: null,
     a3: function() {
      return dj(".dbxmodal").length > 0
     },
     noise: function(c, e, b) {
      var d = {
       action: "info",
       closeButton: true,
       debug: false,
       newestOnTop: false,
       progressBar: false,
       toastClass: "animated fadeInDown",
       positionClass: "toast-top-center",
       preventDuplicates: true,
       onclick: null,
       showDuration: 300,
       hideDuration: 1000,
       timeOut: 6000,
       extendedTimeOut: 1000,
       showEasing: "swing",
       hideEasing: "linear",
       showMethod: "fadeIn",
       hideMethod: "fadeOut",
       afterShow: function() {},
       modal: false,
       callback: function() {}
      };
      if (dj.isNumber(e)) {
       d.timeOut = e
      }
      if (typeof(b) !== "undefined") {
       d = dj.extend(d, b)
      }
      if (d.modal && !this.a3()) {
       this.a8 = dj('<div class="dbxmodal"></div>').css({
        width: "100%",
        height: dj(document).height(),
        "z-index": 1336,
        opacity: 0.7
       }).appendTo(document.body)
      }
      toastr.options = d;
      if (typeof(toastr.options.title) !== "undefined") {
       c = toastr.options.title + ":" + c
      }
      toastr[toastr.options.action](c);
      if (dj.isFunction(toastr.options.afterShow)) {
       toastr.options.afterShow()
      }
      if (dj.isFunction(toastr.options.callback)) {
       var a = this;
       setTimeout(function() {
        toastr.options.callback();
        if (d.modal && a.a8 !== null) {
         a.a8.animate({
          opacity: 0
         }, function() {
          dj(this).remove()
         })
        }
       }, toastr.options.timeOut)
      }
      return false
     },
     alert: function(a) {
      return this.noise(a)
     }
    }
   }();
   var dOneTask = function() {
    var a = "deopsound";
    var b = {
     "false": ["false2.wav", "oo.wav"],
     "true": ["true1.wav", "true2.wav"],
     success: ["success1.wav", "success0.wav"],
     congratulations: {
      course_done: "victory.mp3",
      unit_done: "congratulations0.mp3"
     }
    };
    return {
     e5: {
      id: 0,
      sec: "",
      start: ""
     },
     e0: {},
     b3: "",
     b4: {},
     e1: {
      callbackUrl: "/study/task",
      isUnitTest: false,
      unitUrl: "/study/unit?id=",
      unittestdoneUrl: "/study/unittestdone?id=",
      courseUrl: "/study/course?chk=1&id=",
      isMobile: false,
      isTeacher: false,
      isDeveloper: false,
      languageid: 0,
      curentUnitid: "",
      curentCourseid: "",
      soundon: true,
      user: {
       id: 0,
       display: "",
       studentid: 0,
       email: "",
       classid: 0
      }
     },
     setLanguage: function(c) {
      this.e1.languageid = c
     },
     chkSound: function() {
      var e = dj.cookie(a);
      if (!dj.isNull(e)) {
       this.e1.soundon = parseInt(e) === 1
      }
      var d = this,
       c = dj("#dsound");
      c.addClass(this.e1.soundon ? "dsoundon" : "dsoundoff").click(function() {
       if (d.e1.soundon) {
        c.removeClass("dsoundon").addClass("dsoundoff")
       } else {
        c.removeClass("dsoundoff").addClass("dsoundon")
       }
       d.e1.soundon = !d.e1.soundon;
       dWin.alert("Báº¡n <b>" + d.e1.user["display"] + "</b> Ä‘Ã£ <b>" + (d.e1.soundon ? "báº­t" : "táº¯t") + " Ã¢m thanh</b> há»‡ thá»‘ng thÃ nh cÃ´ng!"); 
       dj.cookie(a, d.e1.soundon ? 1 : 0);
       return false
      })
     },
     init: function(c) {
      this.e1 = dj.extend({}, this.e1, c);
      if (this.e1.curentUnitid !== "") {
       this.e1.curentUnitid = encodeURIComponent(this.e1.curentUnitid)
      }
      if (this.e1.curentCourseid !== "") {
       this.e1.curentCourseid = encodeURIComponent(this.e1.curentCourseid)
      }
      this.e1.unitUrl += this.e1.curentUnitid;
      this.e1.unittestdoneUrl += this.e1.curentUnitid;
      this.e1.courseUrl += this.e1.curentCourseid;
      if (this.e1.isMobile) {
       this.e1.soundon = false
      }
     },
     b6: function(d, c) {
      if (typeof(c) === "undefined") {
       c = this.e5.id
      }
      return this.e1.callbackUrl + "/" + d + "/" + this.e1.user["id"] + "/" + c
     },
     d4: function() {
      dj("#mbody").html(this.b3)
     },
     a4: function(f, g) {
      var c = this,
       d = dj("#daudioplayer").unbind("ended").on("ended", function() {
        dj(".fa-pause").addClass("fa-play-circle").removeClass("fa-pause");
        if (dj.isFunction(g)) {
         g()
        }
       });
      this.b4.done = [];
      dj(".daudio").click(function() {
       var h = dj(this),
        i = h.attr("media-url");
       dj(".fa-pause").addClass("fa-play-circle").removeClass("fa-pause");
       if (h.hasClass("fa-play-circle")) {
        d.attr("src", i).html('<source src="' + i.replace(/.mp3/i, ".ogg") + '" type="audio/ogg" />');
        h.addClass("fa-pause").removeClass("fa-play-circle");
        d[0].play()
       } else {
        h.addClass("fa-play-circle").removeClass("fa-pause");
        d[0].pause()
       }
       h.removeClass("fa-play-circle").addClass("fa-pause");
       var e = h.attr("rel");
       if (typeof(e) !== "undefined" && e !== "" && dj.inArray(e, c.b4.done) === -1) {
        c.b4.done.push(e)
       }
      })
     },
     d5: function(f) {
      dj(".dvoca:first").addClass("active");
      var c = this;
      if (this.e5.view["write"] === 1) {
       function d(j) {
        var h = j.parent(),
         l = h.parent(),
         k = dj(".dview", l);
        var g = dj("<li>" + j.html() + "</li>").click(function() {
         var o = dj(this),
          p = o.parent().parent();
         var n = dj("<li>" + j.html() + "</li>").click(function() {
          d(dj(this))
         });
         dj(".dstore", p).append(n);
         o.remove()
        });
        dj(g).insertBefore(dj("br", k));
        j.remove();
        var i = k.text().toUpperCase(),
         m = dj(".dtitle", l),
         e = dj.sec(i).substr(0, 20);
        if (m.val() === e) {
         return c.d6(m, e)
        }
       }
       dj(".sortable>li").click(function() {
        d(dj(this))
       })
      } else {
       dj("#dmcq .dtitle").click(function() {
        var e = dj(this);
        return c.d6(dj("span", e), e.attr("rel"))
       })
      }
      if (this.e5.view["audio"] === 1) {
       this.a4(f);
       setTimeout(function() {
        dj("#dmcq .daudio:first").click()
       }, 1000)
      }
      if (f) {
       f.center()
      }
     },
     b1: function(c) {
      if (typeof(c.answers) !== "undefined") {
       if (this.e5.view["fill"] === 1) {
        var f = c.answers;
        dj("#dquestion input.danw").each(function() {
         dj(this).val(f.shift())
        })
       } else {
        if (this.e5.view["choose"] === 1) {
         var e = c.answers;
         for (var d in e) {
          dj("#dquestion input[value='" + e[d] + "']").iCheck("check")
         }
        }
       }
      }
      if (this.e5.view["choose"] === 1) {
       dj("#dquestion input[type='checkbox']").iCheck({
        checkboxClass: "icheckbox_square-green"
       });
       dj("#dquestion input[type='radio']").iCheck({
        radioClass: "iradio_square-green"
       })
      } else {
       if (this.e5.view["fill"] === 1 && dj.inArray(this.e1.languageid, [2, 3, 4]) > -1) {
        dj("#dquestion input.danw").each(function() {
         var g = dj(this);
         g.attr("size", 2 * parseInt(g.attr("size")))
        })
       }
      }
     },
     c7: function(f, g) {
      if (typeof(f) === "undefined") {
       return false
      }
      var d = '<source src="' + f.replace(/.mp3/i, ".ogg") + '" type="audio/ogg" />';
      try {
       var e = dj("#daudioplayer").unbind("ended").on("ended", function() {
        if (dj.isFunction(g)) {
         g()
        }
       }).attr("src", f).html(d).unbind("error").on("error", function() {
        if (dj.isFunction(g)) {
         g()
        }
       });
       e[0].play()
      } catch (c) {
       djLog(c)
      }
      return false
     },
     d7: function(c) {
      return djConfig.MEDIA_URL + "rs/" + c
     },
     playSoundCdn: function(d, e) {
      if (!this.e1.soundon) {
       if (dj.isFunction(e)) {
        e()
       }
       return false
      }
      var c = this.d7(d);
      return this.c7(c, e)
     },
     a5: function(c, e) {
      var d = dj(".q" + c + " .daudio:first").attr("media-url");
      return this.c7(d, e)
     },
     d6: function(f, d) {
      var c = this,
       e = parseInt(f.attr("aid"));
      return this.c8(f, d, e, function(h) {
       var i = ".q" + h,
        g = ".q" + (h + 1);
       if (c.e5.view["audio"] === 1) {
        dj(i).removeClass("active");
        dj(g).addClass("active");
        setTimeout(function() {
         dj(g + " .daudio:first").click()
        }, 500)
       } else {
        c.a5(h, function() {
         setTimeout(function() {
          dj(i).removeClass("active");
          dj(g).addClass("active")
         }, 200)
        })
       }
      })
     },
     c8: function(f, m, j, o) {
      var d = f.attr("rel"),
       c = dj("#qid" + d);
      var i = c.attr("rel").split("-"),
       g = parseInt(i[0]);
      var n = dj(".q" + g);
      if (n.hasClass("active")) {
       var l = false;
       if (this.e5.view["write"] === 1) {
        l = true
       } else {
        var h = parseInt(dj.oEncrypt2(i[1]));
        var k = parseInt(dj.oEncrypt2(i[2]));
        l = j - 1 === k - h - parseInt(d)
       }
       if (!l) {
        var e = Math.floor(Math.random() * b["false"].length);
        this.playSoundCdn(b["false"][e]);
        f.parent().parent().css({
         border: "dotted 1px RED"
        })
       } else {
        if (typeof(m) !== "undefined" && m !== "" && dj.inArray(m, this.b4.done) === -1) {
         this.b4.done.push(m)
        }
        this.a7();
        o(g)
       }
      }
      return false
     },
     a7: function() {
      var c = this.b4.done.length === this.b4.total;
      if (c) {
       var d = this,
        e = this.c2();
       this.d4();
       e.vocabularys = this.b4.done.join(",");
       dj.postJSON(this.b6("result"), e, function(f) {
        if (f.err === 0) {
         return d.c3(f.data)
        }
        dDialog.alertError(f.msg)
       })
      }
      return c
     },
     c4: function(c) {
      return this.b6("api", c)
     },
     c9: function(d, c) {
      if (this.e1.languageid === 1) {
       return dj.rsa.decrypt(d, c)
      }
      return d
     },
     developerNextTask: function() {
      var c = this;
      dDialog.confirm("Báº¡n cháº¯c cháº¯n muá»‘n qua bÃ i?", function() {
       dj.postJSON(c.b6("devnext"), c.c2(), function(d) {
        if (d.err === 0) {
         return c.c3(d.data)
        }
        dWin.alert("CÃ³ lá»—i, khÃ´ng thá»ƒ qua bÃ i.")
       })
      });
      return false
     },
     a9: function(e) {
      var c = "degroup_" + e,
       d = dj.cookie(c);
      return dj.isNull(d)
     },
     a0: function() {
      var c = this;
      if (c.b2 === null) {
       c.b2 = dj("#dSubmit")
      }
      var d = dj("#dViewAnswer").click(function() {
       if (c.e0.showAnswering) {
        c.e0.showAnswering = false;
        c.b2.show();
        d.html('<i class="fa fa-eye"></i>&nbsp;Xem láº¡i Ä‘Ã¡p Ã¡n').removeClass("btn-primary").addClass("btn-danger");
        if (c.e5.view["fill"] === 1) {
         dj("#dquestion .danw").val("").css({
          color: "RED"
         })
        } else {
         if (c.e5.view["choose"] === 1) {
          dj("#dquestion .dchk .deck").iCheck("uncheck");
          dj("#dquestion .dchk .dred").removeClass("dred")
         }
        }
       } else {
        c.b2.hide();
        c.e0.btn_answer += 1;
        dj.postJSON(c.b6("answer"), dj.extend({}, c.c2(), {
         languageid: c.e1.languageid,
         qsortkey: c.e0.qsortkey
        }), function(i) {
         if (i.err === 0) {
          var g = i.data;
          if (c.e1.languageid === 1) {
           g = dj.rsa.decrypt(i.data, i.publickey)
          }
          var e = g.split("||");
          if (c.e5.view["fill"] === 1) {
           for (var k in e) {
            var h = dj.oEncrypt2(e[k]);
            dj("#dquestion .danw:eq(" + k + ")").attr("placeholder", h).val(h).css({
             color: "GREEN"
            })
           }
          } else {
           if (c.e5.view["choose"] === 1) {
            dj("#dquestion .dchk .deck").iCheck("uncheck");
            for (var k in e) {
             var j = e[k],
              f = dj("#dquestion .dchk #chk_" + j);
             f.iCheck("check")
            }
           }
          }
          d.html('<i class="fa fa-undo"></i>&nbsp;LÃ m láº¡i').removeClass("btn-danger").addClass("btn-primary");
          c.e0.showAnswering = true
         } else {
          dWin.alert(i.msg)
         }
         return false
        })
       }
      });
      return d
     },
     b2: null,
     cancelReportClick: function() {
      dj("#derrInfo").hide();
      dj("#dReport").show();
      if (this.b2 !== null) {
       this.b2.show()
      }
     },
     submitReportClick: function() {
      var j = window.screen,
       k = this,
       d = dj("#derrInfo textarea"),
       i = d.val();
      if (i === "") {
       dWin.alert("Báº¡n vui lÃ²ng cung cáº¥p thÃ´ng tin lá»—i.");
       return false
      }
      var c = 0;
      dj("#derrInfo .errchk input").each(function() {
       var l = dj(this);
       if (l.iCheck("update")[0].checked) {
        c = parseInt(l.val())
       }
      });
      if (c === 0) {
       dWin.alert("Báº¡n vui lÃ²ng cung cáº¥p kiá»ƒu lá»—i.");
       return false
      }
      k.cancelReportClick();
      var g = this.e5.id,
       f = this.c5();
      var e = djson.encode({
       languageid: this.e1.languageid,
       studentid: this.e1.user["studentid"],
       classid: this.e1.user["classid"],
       timeclient: f,
       errtpy: c,
       errmsg: i,
       sw: j.width,
       sh: j.height
      });
      var h = dj.rsa.encrypt(e);
      d.val("");
      dj.postJSON(this.b6("report", g), {
       taskid: this.e5.sec,
       timeclient: f,
       data: h,
       seck: dj.sec(h)
      }, function(l) {
       if (l.err === 0) {
        dWin.alert(djTemplate.render("Há»‡ thá»‘ng ghi nháº­n Ä‘Ã³ng gÃ³p cá»§a <b>{display}</b>. TrÃ¢n trá»ng cÃ¡m Æ¡n!", k.e1.user))
       } else {
        dWin.alert("KhÃ´ng thá»ƒ bÃ¡o lá»—i. " + l.msg)
       }
      })
     },
     reportTaskError: function() {
      dj("#derrInfo").show();
      if (this.b2 !== null) {
       this.b2.hide()
      }
     },
     b9: function(h, k) {
      if (h.err !== 0) {
       dWin.alert("CÃ³ lá»—i: " + h.msg);
       return
      }
      this.e5 = h.task;
      var f = h.key["public"],
       d = h.key["private"];
      var o = h.task["title"] + " - " + h.task["source"];
      if (typeof(k) !== "undefined") {
       o += " (" + k.done + " / " + k.total + ")"
      }
      dj("#dtasktitle").html(o);
      var q = {
       source: this.e5.source,
       showid: this.e5.showid,
       body: this.c9(h.data["view"], f)
      };
      var j = djTemplate.render('<div class="d{source} {showid}">{body}</div>', q);
      dj("#mbody").html(j);
      var g = dj("#mbody").width();
      var i = true,
       n = true,
       c = 30;
      if (this.e1.isUnitTest) {
       i = false;
       n = false;
       c = 10
      }
      dmediaEmbed({
       width: g,
       scale: 0,
       isAd: false,
       hls: true,
       audio: {
        allowSeek: i,
        allowPause: n,
        maxPlay: c,
        onPlay: function(r) {
         if (dj.isFunction(r)) {
          r()
         }
        },
        onPause: function(r) {
         if (dj.isFunction(r)) {
          r()
         }
        },
        onMaxPlayed: function() {
         dWin.alert("ÄÃ£ nghe quÃ¡ sá»‘ láº§n quy Ä‘á»‹nh (" + c + " láº§n).")
        }
       }
      });
      if (this.e1.isUnitTest) {
       dj("#mfooter .btpn").hide();
       if (this.e5.backward !== undefined) {
        dj("#test_backward").attr("href", this.e5.backward).show()
       }
       if (this.e5.forward !== undefined) {
        dj("#test_forward").attr("href", this.e5.forward).show()
       }
      }
      dj("#mbody a").each(function() {
       dj(this).attr("target", "_blank")
      });
      dj("#mbody img").each(function() {
       var r = dj(this),
        s = r.attr("src");
       setTimeout(function() {
        r.css({
         border: "solid 1px #FEFEFE"
        })
       }, 1000)
      });
      dj(".dnut").hide().unbind("click");
      var p = this,
       e = this.b6("result");
      if (this.e5.source === "vocabulary") {
       this.b4.total = h.data["total"];
       this.a4();
       this.b2 = dj("#dSubmit").click(function() {
        if (!p.a7()) {
         dWin.alert("Báº¡n cáº§n click Ä‘á»c táº¥t cáº£ cÃ¡c tá»« má»›i Ä‘á»ƒ há»c vÃ  chuyá»ƒn bÃ i tiáº¿p theo")
        }
        return false
       });
       setTimeout(function() {
        p.b2.show()
       }, 2000)
      } else {
       if (this.e5.source === "mcq") {
        this.b4.total = h.data["total"];
        this.d5()
       } else {
        if (this.e5.source === "content") {
         this.b2 = dj("#dSubmit").click(function() {
          dj.postJSON(e, p.c2(), function(r) {
           if (r.err === 0) {
            dWin.noise("ÄÃ£ hoÃ n thÃ nh bÃ i Ä‘á»c", 2000, {
             action: "success",
             callback: function() {
              return p.c3(r.data)
             }
            })
           } else {
            dWin.alert("CÃ³ lá»—i, khÃ´ng thá»ƒ gá»­i dá»¯ liá»‡u bÃ i há»c, báº¡n vui lÃ²ng lÃ m láº¡i bÃ i táº­p.")
           }
           return false
          })
         });
         setTimeout(function() {
          p.b2.show()
         }, 2000)
        } else {
         if (this.e5.source === "question") {
          var m = h.data["total"];
          this.b1(h);
          this.e0.showAnswering = false;
          this.e0.qsortkey = h.data["qsortkey"];
          this.b2 = dj("#dSubmit").click(function() {
           if (p.e0.showAnswering) {
            return false
           }
           var r = null;
           if (p.e5.view["choose"] === 1) {
            var u = [];
            dj("#dquestion .deck").each(function() {
             var x = dj(this);
             if (x.iCheck("update")[0].checked) {
              u.push(x.val())
             }
            });
            if (!p.e1.isUnitTest && u.length < m) {
             dWin.alert("Báº¡n cáº§n Ä‘Ã¡nh dáº¥u vÃ o cÃ¡c lá»±a chá»n cho cÃ¢u tráº£ lá»i trÆ°á»›c khi gá»­i káº¿t quáº£.");
             return false
            }
            r = djson.encode({
             ua: u
            })
           } else {
            if (p.e5.view["fill"] === 1) {
             var s = [],
              w = false,
              t = [];
             dj("#dquestion .danw").each(function() {
              var x = dj(this).val();
              s.push(x);
              if (x !== "") {
               w = true;
               t.push(x)
              }
             });
             if (!p.e1.isUnitTest && (!w || t.length < s.length)) {
              dWin.alert("Báº¡n cáº§n Ä‘iá»n ná»™i dung cÃ¢u tráº£ lá»i vÃ o cÃ¡c Ã´ trá»‘ng trÆ°á»›c khi gá»­i káº¿t quáº£.");
              return false
             }
             r = djson.encode({
              ua: s
             })
            }
           }
           if (r !== null) {
            var v = r;
            if (p.e1.languageid === 1) {
             v = dj.rsa.encrypt(r, f)
            }
            dj.postJSON(e, dj.extend({}, p.c2(), {
             qsortkey: p.e0.qsortkey,
             answer: v,
             publickey: f,
             clientkey: d
            }), function(A) {
             if (A.err === 0) {
              p.e0.btn_submit += 1;
              var B = A.data,
               z = "ÄÃ£ gá»­i káº¿t quáº£ lÃªn mÃ¡y chá»§";
              if (p.e1.isUnitTest) {
               dWin.noise(z, 2000, {
                action: "success",
                callback: function() {
                 return p.c3(B)
                }
               })
              } else {
               B.result = Math.round(B.result * 100);
               if (p.e5.view["choose"] === 1) {
                z = djTemplate.render("Báº¡n Ä‘Ã£ hoÃ n thÃ nh <b>{result}</b>% yÃªu cáº§u cá»§a <b>{total_question}</b> cÃ¢u há»i, chÆ°a thá»ƒ vÆ°á»£t qua bÃ i há»c.", B);
                if (B.done) {
                 z = djTemplate.render("Báº¡n Ä‘Ã£ Ä‘Ã¡nh dáº¥u Ä‘Ãºng toÃ n bá»™ <b>{total_question}</b> cÃ¢u há»i!", B)
                }
                dj("#dquestion .dchk label").css({
                 color: "BLACK"
                });
                dj("#dquestion .deck").each(function() {
                 var D = dj(this);
                 if (D.iCheck("update")[0].checked) {
                  var E = D.attr("id"),
                   F = D.val(),
                   C = dj.inArray(F, B.true_idx) > -1;
                  dj("#dquestion .dchk label[for='" + E + "']").css({
                   color: C ? "GREEN" : "RED"
                  })
                 }
                })
               } else {
                if (p.e5.view["fill"] === 1) {
                 z = djTemplate.render("Báº¡n Ä‘Ã£ Ä‘iá»n Ä‘Ãºng <b>{total_answerok}</b> / <b>{total_fill}</b> Ã´ trá»‘ng Ä‘Ã¡p Ã¡n (Ä‘áº¡t {result}% yÃªu cáº§u).", B);
                 if (B.done) {
                  z = djTemplate.render("Báº¡n Ä‘Ã£ Ä‘iá»n Ä‘Ãºng toÃ n bá»™ Ä‘Ã¡p Ã¡n!", B)
                 }
                 for (var y in B.true_idx) {
                  var x = B.true_idx[y];
                  dj("#dquestion .danw:eq(" + x + ")").css({
                   color: "GREEN"
                  })
                 }
                }
               }
               dWin.noise(z, 1500, {
                action: B.done ? "success" : "error",
                callback: function() {
                 if (B.done) {
                  return p.c3(A.data)
                 }
                 if (p.e0.btn_submit >= 1) {
                  if (p.e0.btn_submit === 1) {
                   dWin.noise('CÃ³ thá»ƒ tham kháº£o ÄÃ¡p Ã¡n báº±ng cÃ¡ch Click vÃ o "Xem Ä‘Ã¡p Ã¡n"', 2000, {
                    positionClass: "toast-bottom-right"
                   })
                  }
                  dj("#dViewAnswer").show()
                 }
                }
               })
              }
             } else {
              dDialog.alertError("CÃ³ lá»—i, khÃ´ng thá»ƒ gá»­i dá»¯ liá»‡u bÃ i há»c, báº¡n vui lÃ²ng lÃ m láº¡i bÃ i táº­p.")
             }
             return false
            })
           }
          });
          setTimeout(function() {
           p.b2.show()
          }, 1500);
          if (!this.e1.isUnitTest) {
           var l = this.a0();
           if (this.e1.isTeacher || this.e1.isDeveloper) {
            l.show()
           }
          }
         }
        }
       }
      }
     },
     d2: function(d, c) {
      this.e0 = {
       btn_submit: 0,
       btn_answer: 0
      };
      this.b4 = {
       total: 0,
       done: []
      };
      this.b9(d, c)
     },
     oneTask: function(e, d, f) {
      if (typeof(f) !== "undefined" && this.a9(f)) {
       dWin.alert("Báº¡n cáº§n chá»n láº¡i lá»›p Ä‘á»™c láº­p Ä‘á»ƒ báº¯t Ä‘áº§u thá»±c hÃ nh cÃ¡c bÃ i há»c");
       return false
      }
      this.e5.sec = d;
      this.b3 = dj("#mbody").html();
      this.d4();
      var c = this;
      dj.postJSON(this.c4(e), this.c2(), function(g) {
       c.d2(g)
      });
      return false
     },
     c5: function() {
      return Math.round(new Date().getTime() / 1000)
     },
     c2: function(c) {
      return dj.extend({}, {
       taskid: this.e5.sec,
       languageid: this.e1.languageid,
       taskstart: this.e5.start,
       timeclient: this.c5()
      }, this.e0, c)
     },
     c3: function(f) {
      var c = this,
       e = dj("#dunittitle").text();
      if (f.unit_done) {
       if (c.e1.isUnitTest) {
        var d = djTemplate.render('<div style="max-width:600px"><h5><b>{display}</b> Ä‘Ã£ hÃ²an thÃ nh xong cÃ¡c bÃ i cá»§a <b>{unit_name}</b>!</h5><p>CÃ²n thá»i gian nÃªn báº¡n cÃ³ thá»ƒ lÃ m láº¡i cÃ¡c bÃ i, há»‡ thá»‘ng ghi nháº­n káº¿t quáº£ cuá»‘i cÃ¹ng gá»­i tá»›i mÃ¡y chá»§.</p><p style="text-align:center;margin:10px auto"><img src="{img}" style="max-height:180px"/></p></div>', {
         unit_name: e,
         display: this.e1.user["display"],
         img: this.d7("unittest_done.jpg")
        });
        dDialog.openContent(d, "ThÃ´ng bÃ¡o", {
         modal: true,
         afterShow: function(j) {
          dj(document).ready(function() {
           j.moveTo(100);
           j.center()
          })
         }
        }, {
         btnSubmit: {
          cls: "L3",
          title: "Ná»™p bÃ i",
          command: function() {
           window.location.href = c.e1.unittestdoneUrl
          }
         },
         btnCancel: {
          cls: "L4",
          title: "LÃ m tiáº¿p"
         }
        })
       } else {
        var h = djTemplate.render("ChÃºc má»«ng {display} Ä‘Ã£ há»c xong chá»§ Ä‘á» {unittitle}.", {
         display: this.e1.user["display"],
         unittitle: e
        });
        dWin.alert(h);
        this.playSoundCdn(b.congratulations["unit_done"], function() {
         setTimeout(function() {
          window.location.href = c.e1.courseUrl
         }, 2000)
        })
       }
      } else {
       if (f.next) {
        if (!c.e1.isUnitTest) {
         var i = Math.floor(Math.random() * b.success.length),
          g = b.success[i];
         this.playSoundCdn(g, function() {
          c.d2(f.next, f.userlog)
         })
        } else {
         c.d2(f.next, f.userlog)
        }
        history.replaceState({}, "", f.next["task"]["id"] + "?id=" + f.next["task"]["sec"])
       }
      }
      return false
     }
    }
   }();