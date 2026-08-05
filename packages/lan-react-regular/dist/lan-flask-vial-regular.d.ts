import React from 'react';

export interface LanFlaskVialRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlaskVialRegular(props: LanFlaskVialRegularProps): React.ReactElement;
export default LanFlaskVialRegular;
