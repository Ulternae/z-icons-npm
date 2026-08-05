import React from 'react';

export interface LanObjectExcludeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectExcludeThin(props: LanObjectExcludeThinProps): React.ReactElement;
export default LanObjectExcludeThin;
