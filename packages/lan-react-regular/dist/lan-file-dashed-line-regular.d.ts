import React from 'react';

export interface LanFileDashedLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileDashedLineRegular(props: LanFileDashedLineRegularProps): React.ReactElement;
export default LanFileDashedLineRegular;
