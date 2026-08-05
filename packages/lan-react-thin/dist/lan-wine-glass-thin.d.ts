import React from 'react';

export interface LanWineGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWineGlassThin(props: LanWineGlassThinProps): React.ReactElement;
export default LanWineGlassThin;
