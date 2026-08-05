import React from 'react';

export interface MinaUserSettingsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserSettingsSolid(props: MinaUserSettingsSolidProps): React.ReactElement;
export default MinaUserSettingsSolid;
