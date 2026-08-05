import React from 'react';

export interface LanGlassCitrusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassCitrus(props: LanGlassCitrusProps): React.ReactElement;
export default LanGlassCitrus;
