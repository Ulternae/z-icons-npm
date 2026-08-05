import React from 'react';

export interface MinaUserSettingsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserSettings(props: MinaUserSettingsProps): React.ReactElement;
export default MinaUserSettings;
