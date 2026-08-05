import React from 'react';

export interface LanEngineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEngineThin(props: LanEngineThinProps): React.ReactElement;
export default LanEngineThin;
