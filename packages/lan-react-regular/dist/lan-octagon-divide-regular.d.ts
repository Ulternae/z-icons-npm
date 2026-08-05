import React from 'react';

export interface LanOctagonDivideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOctagonDivideRegular(props: LanOctagonDivideRegularProps): React.ReactElement;
export default LanOctagonDivideRegular;
