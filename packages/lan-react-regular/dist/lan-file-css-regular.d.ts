import React from 'react';

export interface LanFileCssRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCssRegular(props: LanFileCssRegularProps): React.ReactElement;
export default LanFileCssRegular;
