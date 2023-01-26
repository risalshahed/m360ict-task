export interface Spacex {
  crew?: null,
  details?: string,
  flight_number?: number,
  is_tentative?: boolean,
  launch_date_local?: string | Date,
  launch_date_unix?: number,
  launch_date_utc?: string | Date,
  launch_failure_details?: {
    altitude?: number | null,
    reason?: string,
    time?: number,
  },
  launch_site?: {
    site_id?: string,
    site_name?: string,
    site_name_long?: string
  },
  launch_success?: boolean,
  launch_window?: number,
  launch_year?: string,
  links?: {
    article_link?: string,
    flickr_images?: [],
    mission_patch?: string,
    mission_patch_small?: string,
    presskit?: string | null,
    reddit_campaign?: string | null,
    reddit_launch?: string | null,
    reddit_media?: string | null,
    reddit_recovery?: string | null,
    video_link?: string,
    wikipedia?: string,
    youtube_id?: string,
  }
  mission_id?: [],
  mission_name?: string,
  rocket?: {
    fairings?: {
      recovered?: boolean,
      recovery_attempt?: boolean,
      reused?: boolean,
      ship?: boolean,
    },
    first_stage?: {
      cores?: []
    },
    rocket_id?: string,
    rocket_name?: string,
    rocket_type?: string,
    second_stage?: {
      block?: number,
      payloads?: []
    }
  },
  ships?: [],
  static_fire_date_unix?: number,
  static_fire_date_utc?: string | Date,
  tbd?: boolean,
  telemetry?: {
    flight_club?: string | null,
  },
  tentative_max_precision?: string,
  timeline?: {
    dragon_bay_door_deploy?: number,
    dragon_separation?: number,
    dragon_solar_deploy?: number,
    engine_chill?: number,
    first_stage_boostback_burn?: number,
    first_stage_entry_burn?: number,
    go_for_launch?: number,
    go_for_prop_loading?: number,
    ignition?: number,
    liftoff?: number,
    maxq?: number,
    prelaunch_checks?: number,
    propellant_pressurization?: number,
    rp1_loading?: number,
    'seco-1'?: number,
    second_stage_ignition?: number,
    stage1_lox_loading?: number,
    stage2_lox_loading?: number,
    stage_sep?: number,
    webcast_liftoff?: number,
  },
  upcoming?: boolean
}