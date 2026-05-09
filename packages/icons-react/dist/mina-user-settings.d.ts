import React from 'react';

export interface MinaUserSettingsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserSettings: React.FC<MinaUserSettingsProps>;
export default MinaUserSettings;
