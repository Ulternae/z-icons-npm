import React from 'react';

export interface LanHandcuffsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandcuffs(props: LanHandcuffsProps): React.ReactElement;
export default LanHandcuffs;
