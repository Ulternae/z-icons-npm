import React from 'react';

export interface LanSmogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmogRegular(props: LanSmogRegularProps): React.ReactElement;
export default LanSmogRegular;
