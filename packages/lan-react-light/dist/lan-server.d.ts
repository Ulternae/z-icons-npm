import React from 'react';

export interface LanServerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanServer(props: LanServerProps): React.ReactElement;
export default LanServer;
