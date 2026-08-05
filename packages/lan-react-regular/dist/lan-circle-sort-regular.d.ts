import React from 'react';

export interface LanCircleSortRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSortRegular(props: LanCircleSortRegularProps): React.ReactElement;
export default LanCircleSortRegular;
