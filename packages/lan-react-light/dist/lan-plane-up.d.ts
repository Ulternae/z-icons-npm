import React from 'react';

export interface LanPlaneUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneUp(props: LanPlaneUpProps): React.ReactElement;
export default LanPlaneUp;
