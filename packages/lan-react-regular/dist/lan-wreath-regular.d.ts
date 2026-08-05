import React from 'react';

export interface LanWreathRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWreathRegular(props: LanWreathRegularProps): React.ReactElement;
export default LanWreathRegular;
