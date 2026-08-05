import React from 'react';

export interface LanBaguetteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaguette(props: LanBaguetteProps): React.ReactElement;
export default LanBaguette;
