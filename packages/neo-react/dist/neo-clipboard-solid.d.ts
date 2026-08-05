import React from 'react';

export interface NeoClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoClipboardSolid(props: NeoClipboardSolidProps): React.ReactElement;
export default NeoClipboardSolid;
