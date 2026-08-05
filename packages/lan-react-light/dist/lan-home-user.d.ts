import React from 'react';

export interface LanHomeUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeUser(props: LanHomeUserProps): React.ReactElement;
export default LanHomeUser;
