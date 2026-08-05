import React from 'react';

export interface LanFaceDisguiseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDisguiseRegular(props: LanFaceDisguiseRegularProps): React.ReactElement;
export default LanFaceDisguiseRegular;
