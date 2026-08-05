import React from 'react';

export interface LanChildRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildRegular(props: LanChildRegularProps): React.ReactElement;
export default LanChildRegular;
