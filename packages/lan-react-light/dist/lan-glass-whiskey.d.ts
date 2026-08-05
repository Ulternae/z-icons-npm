import React from 'react';

export interface LanGlassWhiskeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassWhiskey(props: LanGlassWhiskeyProps): React.ReactElement;
export default LanGlassWhiskey;
