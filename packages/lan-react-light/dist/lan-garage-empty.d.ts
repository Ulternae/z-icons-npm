import React from 'react';

export interface LanGarageEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageEmpty(props: LanGarageEmptyProps): React.ReactElement;
export default LanGarageEmpty;
