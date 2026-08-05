import React from 'react';

export interface LanNasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNasRegular(props: LanNasRegularProps): React.ReactElement;
export default LanNasRegular;
