import React from 'react';

export interface LanLighthouseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLighthouse(props: LanLighthouseProps): React.ReactElement;
export default LanLighthouse;
