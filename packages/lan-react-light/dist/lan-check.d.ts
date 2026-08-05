import React from 'react';

export interface LanCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheck(props: LanCheckProps): React.ReactElement;
export default LanCheck;
