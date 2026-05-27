import React from 'react';

export interface CoreServerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreServer: React.FC<CoreServerProps>;
export default CoreServer;
