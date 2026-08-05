import React from 'react';

export interface LanSmokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmokeThin(props: LanSmokeThinProps): React.ReactElement;
export default LanSmokeThin;
