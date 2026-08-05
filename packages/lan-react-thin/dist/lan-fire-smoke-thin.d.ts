import React from 'react';

export interface LanFireSmokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFireSmokeThin(props: LanFireSmokeThinProps): React.ReactElement;
export default LanFireSmokeThin;
