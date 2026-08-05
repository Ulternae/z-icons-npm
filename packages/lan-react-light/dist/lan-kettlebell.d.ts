import React from 'react';

export interface LanKettlebellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKettlebell(props: LanKettlebellProps): React.ReactElement;
export default LanKettlebell;
