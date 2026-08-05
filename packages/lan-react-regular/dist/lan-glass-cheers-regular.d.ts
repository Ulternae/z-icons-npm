import React from 'react';

export interface LanGlassCheersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassCheersRegular(props: LanGlassCheersRegularProps): React.ReactElement;
export default LanGlassCheersRegular;
