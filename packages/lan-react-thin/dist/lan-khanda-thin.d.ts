import React from 'react';

export interface LanKhandaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKhandaThin(props: LanKhandaThinProps): React.ReactElement;
export default LanKhandaThin;
