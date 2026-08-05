import React from 'react';

export interface LanGlassCheersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassCheers(props: LanGlassCheersProps): React.ReactElement;
export default LanGlassCheers;
