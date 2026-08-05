import React from 'react';

export interface LanFaceDisguiseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDisguiseThin(props: LanFaceDisguiseThinProps): React.ReactElement;
export default LanFaceDisguiseThin;
