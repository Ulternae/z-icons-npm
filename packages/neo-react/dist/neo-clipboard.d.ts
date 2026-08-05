import React from 'react';

export interface NeoClipboardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoClipboard(props: NeoClipboardProps): React.ReactElement;
export default NeoClipboard;
