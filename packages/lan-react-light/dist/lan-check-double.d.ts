import React from 'react';

export interface LanCheckDoubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCheckDouble(props: LanCheckDoubleProps): React.ReactElement;
export default LanCheckDouble;
