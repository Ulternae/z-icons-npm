import React from 'react';

export interface LanWineGlassCrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineGlassCrack(props: LanWineGlassCrackProps): React.ReactElement;
export default LanWineGlassCrack;
