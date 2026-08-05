import React from 'react';

export interface LanFaceDisguiseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDisguise(props: LanFaceDisguiseProps): React.ReactElement;
export default LanFaceDisguise;
