import React from 'react';

export interface LanLightbulbSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLightbulbSlash(props: LanLightbulbSlashProps): React.ReactElement;
export default LanLightbulbSlash;
