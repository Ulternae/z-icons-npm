import React from 'react';

export interface LanObjectExcludeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectExcludeThin: React.FC<LanObjectExcludeThinProps>;
export default LanObjectExcludeThin;
