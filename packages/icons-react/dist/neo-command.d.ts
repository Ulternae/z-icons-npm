import React from 'react';

export interface NeoCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCommand: React.FC<NeoCommandProps>;
export default NeoCommand;
