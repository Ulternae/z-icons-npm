import React from 'react';

export interface LanTemperatureSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTemperatureSlash(props: LanTemperatureSlashProps): React.ReactElement;
export default LanTemperatureSlash;
