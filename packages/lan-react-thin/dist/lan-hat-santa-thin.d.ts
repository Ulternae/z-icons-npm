import React from 'react';

export interface LanHatSantaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatSantaThin(props: LanHatSantaThinProps): React.ReactElement;
export default LanHatSantaThin;
