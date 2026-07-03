import React from 'react';

export interface BruFlipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFlipboard(props: BruFlipboardProps): React.ReactElement;
export default BruFlipboard;
