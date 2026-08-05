import React from 'react';

export interface LanFlaskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskRegular(props: LanFlaskRegularProps): React.ReactElement;
export default LanFlaskRegular;
