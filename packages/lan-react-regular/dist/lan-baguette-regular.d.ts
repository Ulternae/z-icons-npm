import React from 'react';

export interface LanBaguetteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaguetteRegular(props: LanBaguetteRegularProps): React.ReactElement;
export default LanBaguetteRegular;
