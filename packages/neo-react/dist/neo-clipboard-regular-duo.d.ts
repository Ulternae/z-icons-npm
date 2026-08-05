import React from 'react';

export interface NeoClipboardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoClipboardRegularDuo(props: NeoClipboardRegularDuoProps): React.ReactElement;
export default NeoClipboardRegularDuo;
