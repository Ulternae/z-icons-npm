import React from 'react';

export interface LanBookOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookOpenRegular(props: LanBookOpenRegularProps): React.ReactElement;
export default LanBookOpenRegular;
