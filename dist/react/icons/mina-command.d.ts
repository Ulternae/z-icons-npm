import React from 'react';

export interface MinaCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCommand: React.FC<MinaCommandProps>;
export default MinaCommand;
