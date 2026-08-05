import React from 'react';

export interface MinaClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClipboard(props: MinaClipboardProps): React.ReactElement;
export default MinaClipboard;
