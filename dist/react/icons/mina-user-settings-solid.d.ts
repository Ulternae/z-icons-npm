import React from 'react';

export interface MinaUserSettingsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserSettingsSolid: React.FC<MinaUserSettingsSolidProps>;
export default MinaUserSettingsSolid;
